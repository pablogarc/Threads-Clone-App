"use client";

import * as z from "zod";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { CommentValidationSchema } from "@/lib/validations/thread";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { addCommentToThread } from "@/lib/actions/thread.actions";

const Comment = ({
  threadId,
  currentUserImg,
  currentUserId,
}: {
  threadId: string;
  currentUserImg: string;
  currentUserId: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm<z.infer<typeof CommentValidationSchema>>({
    resolver: zodResolver(CommentValidationSchema),
    defaultValues: {
      thread: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof CommentValidationSchema>) => {
    await addCommentToThread({
        threadId: threadId,
        commentText: values.thread,
        userId: JSON.parse(currentUserId),
        path: pathname
    });

    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-10 flex items-center gap-4 border-y border-y-dark-4 py-5 max-xs:flex-col"
      >
        <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className="flex gap-3 w-full items-center">
              <FormLabel>
                <Image src={currentUserImg} alt="Profile Image" width={48} height={48} className="rounded-full object-cover" />
              </FormLabel>
              <FormControl className=" border-none bg-transparent">
                <Input
                  type="text"
                  placeholder="Add a comment..."
                  className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 text-light-1 outline-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="rounded-3xl bg-primary-500 px-8 py-2 !text-small-regular text-light-1 max-xs:w-full">
          Reply
        </Button>
      </form>
    </Form>
  );
};

export default Comment;

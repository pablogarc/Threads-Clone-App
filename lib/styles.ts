const generalStyles = {
  mainContainer:
    "flex min-h-screen flex-1 flex-col items-center bg-dark-1 px-6 pb-10 pt-28 max-md:pb-32 sm:px-10",
  headText: "text-heading2-bold text-light-1",
  noResult: "text-center text-base-regular text-light-3",
  pagination: "mt-10 flex w-full items-center justify-center gap-5",
  cssInvert:
    "sticky right-0 top-0 z-20 flex h-screen w-fit flex-col justify-between gap-12 overflow-auto border-l border-l-dark-4 bg-dark-2 px-10 pb-6 pt-28 max-xl:hidden",
  clerkResponsive: "max-sm:hidden",
  tab: "flex min-h-[50px] flex-1 items-center gap-3 bg-dark-2 text-light-2 data-[state=active]:bg-[#0e0e12] data-[state=active]:text-light-2",
  noFocus: "focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",
};

const cardStyles = {
  activityCard: "lex items-center gap-2 rounded-md bg-dark-2 px-7 py-4",
  communityCard: "w-full rounded-lg bg-dark-3 px-4 py-5 sm:w-96",
  communityCardButton:
    "rounded-lg bg-primary-500 px-5 py-1.5 text-small-regular text-light-1",
  threadCardBar: "relative mt-2 w-0.5 grow rounded-full bg-neutral-800",
  userCard:
    "flex flex-col justify-between gap-4 max-xs:rounded-xl max-xs:bg-dark-3 max-xs:p-4 xs:flex-row xs:items-center",
  userCardAvatar: "flex flex-1 items-start justify-start gap-3 xs:items-center",
  userCardButton:
    "h-auto min-w-[74px] rounded-lg bg-primary-500 text-[12px] text-light-1",
};

const barStyles = {
  searchBar: "flex gap-1 rounded-lg bg-dark-3 px-4 py-2",
  searchBarInput: "text-heading2-bold text-light-1",
  topBar:
    "fixed top-0 z-30 flex w-full items-center justify-between bg-dark-2 px-6 py-3",
  bottomBar:
    "fixed bottom-0 z-10 w-full rounded-t-3xl bg-glassmorphism p-4 backdrop-blur-lg xs:px-7 md:hidden",
  bottomBarContainer: "flex items-center justify-between gap-3 xs:gap-5",
  bottomBarLink:
    "relative flex flex-col items-center gap-2 rounded-lg p-2 sm:flex-1 sm:px-2 sm:py-2.5",
  leftSideBar:
    "sticky left-0 top-0 z-20 flex h-screen w-fit flex-col justify-between overflow-auto border-r border-r-dark-4 bg-dark-2 pb-5 pt-28 max-md:hidden",
  leftSideBarLink: "relative flex justify-start gap-4 rounded-lg p-4",
  rightSideBar: "sticky right-0 top-0 z-20 flex h-screen w-fit flex-col justify-between gap-12 overflow-auto border-l border-l-dark-4 bg-dark-2 px-10 pb-6 pt-28 max-xl:hidden",
};

const formStyles = {
  accountFormImageLabel: "flex h-24 w-24 items-center justify-center rounded-full bg-dark-4",
  accountFormImageInput: "cursor-pointer border-none bg-transparent outline-none file:text-blue",
  accountFormInput: "border border-dark-4 bg-dark-3 text-light-1",
  commentForm: "mt-10 flex items-center gap-4 border-y border-y-dark-4 py-5 max-xs:flex-col",
  commentFormButton: "rounded-3xl bg-primary-500 px-8 py-2 !text-small-regular text-light-1 max-xs:w-full",
}

export {
  generalStyles,
  cardStyles,
  barStyles,
  formStyles
};

export const funnels = {
  advisors: {
  brand: "WalletSaint",
  partner: "",
  logo: null,
    rmd: false,
    headline: "Compare financial advisors before making a major retirement decision.",
    subheadline:
      "Answer a few questions to review advisor options that may fit your retirement planning needs.",
    question: "How many years do you have before retirement?",
  },
  "advisors-rmd": {
    brand: "WalletSaint",
    partner: "",
    rmd: true,
logo: null,
    headline:
      "Review RMD planning questions before choosing a financial advisor.",
    subheadline:
      "Required Minimum Distributions can affect taxes, income planning, and withdrawal timing. Start by answering a few questions.",
    question: "How many years do you have before retirement?",
  },
  "finance-advisors": {
    brand: "WalletSaint + Finance Advisors",
    partner: "Finance Advisors",
    rmd: false,
logo: "/partners/finance-advisors-logo.png",
    headline:
      "Compare financial advisor options for retirement planning decisions.",
    subheadline:
      "WalletSaint and Finance Advisors help readers review advisor-matching options before making major financial decisions.",
    question: "How many years do you have before retirement?",
  },
  "finance-advisors-rmd": {
    brand: "WalletSaint + Finance Advisors",
    partner: "Finance Advisors",
logo: "/partners/finance-advisors-logo.png",
    rmd: true,
    headline:
      "See which RMD planning questions may be worth discussing with an advisor.",
    subheadline:
      "Required Minimum Distributions may affect taxes, income, and retirement account planning. Answer a few questions to continue.",
    question: "How many years do you have before retirement?",
  },
  smartasset: {
    brand: "WalletSaint + SmartAsset",
    partner: "SmartAsset",
logo: "/partners/smartasset-logo.png",
    rmd: false,
    headline:
      "Compare advisor-matching options before making retirement decisions.",
    subheadline:
      "WalletSaint and SmartAsset help readers explore financial advisor options based on their planning needs.",
    question: "How many years do you have before retirement?",
  },
  "smartasset-rmd": {
    brand: "WalletSaint + SmartAsset",
    partner: "SmartAsset",
logo: "/partners/smartasset-logo.png",
    rmd: true,
    headline:
      "Review RMD planning topics and compare advisor-matching options.",
    subheadline:
      "Required Minimum Distributions can create important tax and income planning questions. Answer a few questions to continue.",
    question: "How many years do you have before retirement?",
  },
};

export const answerOptions = [
  "11+",
  "6-10",
  "2-5",
  "Less Than 2",
  "Already retired",
];
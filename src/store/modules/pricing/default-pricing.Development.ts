import { SubscriptionPriceType } from "@/application/enum/master/SubscriptionPriceType";
import { SubscriptionBillingPeriod } from "@/application/enum/master/SubscriptionBillingPeriod";
import { SubscriptionProductDto } from "@/application/dtos/master/subscriptions/SubscriptionProductDto";

export const defaultProductsDevelopment: SubscriptionProductDto[] = [
  {
    id: undefined,
    serviceId: "",
    tier: 1,
    title: "Starter 🔥",
    image: "",
    description:
      "Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.",
    prices: [
      {
        id: undefined,
        serviceId: "",
        type: SubscriptionPriceType.OneTime,
        billingPeriod: SubscriptionBillingPeriod.Once,
        price: 0,
        currency: "usd",
        trialDays: 0,
        active: true,
      },
      {
        id: undefined,
        serviceId: "",
        type: SubscriptionPriceType.OneTime,
        billingPeriod: SubscriptionBillingPeriod.Once,
        price: 0,
        currency: "mxn",
        trialDays: 0,
        active: true,
      },
      {
        id: undefined,
        serviceId: "",
        type: SubscriptionPriceType.OneTime,
        billingPeriod: SubscriptionBillingPeriod.Once,
        price: 0,
        currency: "eur",
        trialDays: 0,
        active: true,
      },
    ],
    features: [
      { id: undefined, order: 1,  key: "maxNumberOfUsers", value: "1", included: true, translateInFrontend: true },
      { id: undefined, order: 2,  key: "feature2", value: "", included: true, translateInFrontend: true },
      { id: undefined, order: 3,  key: "feature3", value: "", included: true, translateInFrontend: true },
      { id: undefined, order: 4,  key: "feature4", value: "", included: false, translateInFrontend: true },
      { id: undefined, order: 5,  key: "feature5", value: "", included: false, translateInFrontend: true },
    ],
    badge: "",
    active: true,
    maxUsers: 1,
  },
  {
    id: undefined,
    serviceId: "",
    tier: 2,
    title: "Pro 🦄",
    image: "",
    description:
      "Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.",
    prices: [
      {
        id: undefined,
        serviceId: "",
        type: SubscriptionPriceType.Recurring,
        billingPeriod: SubscriptionBillingPeriod.Monthly,
        price: 1,
        currency: "usd",
        trialDays: 14,
        active: true,
      },
      {
        id: undefined,
        serviceId: "",
        type: SubscriptionPriceType.Recurring,
        billingPeriod: SubscriptionBillingPeriod.Monthly,
        price: 20,
        currency: "mxn",
        trialDays: 14,
        active: true,
      },
      {
        id: undefined,
        serviceId: "",
        type: SubscriptionPriceType.Recurring,
        billingPeriod: SubscriptionBillingPeriod.Monthly,
        price: 0.85,
        currency: "eur",
        trialDays: 14,
        active: true,
      },
      {
        id: undefined,
        serviceId: "",
        type: SubscriptionPriceType.Recurring,
        billingPeriod: SubscriptionBillingPeriod.Yearly,
        price: 10,
        currency: "usd",
        trialDays: 14,
        active: true,
      },
      {
        id: undefined,
        serviceId: "",
        type: SubscriptionPriceType.Recurring,
        billingPeriod: SubscriptionBillingPeriod.Yearly,
        price: 200,
        currency: "mxn",
        trialDays: 14,
        active: true,
      },
      {
        id: undefined,
        serviceId: "",
        type: SubscriptionPriceType.Recurring,
        billingPeriod: SubscriptionBillingPeriod.Yearly,
        price: 8.5,
        currency: "eur",
        trialDays: 14,
        active: true,
      },
    ],
    features: [
      { id: undefined, order: 1,  key: "maxNumberOfUsers", value: "3", included: true, translateInFrontend: true },
      { id: undefined, order: 2,  key: "feature2", value: "", included: true, translateInFrontend: true },
      { id: undefined, order: 3,  key: "feature3", value: "", included: true, translateInFrontend: true },
      { id: undefined, order: 4,  key: "feature4", value: "", included: true, translateInFrontend: true },
      { id: undefined, order: 5,  key: "feature5", value: "", included: false, translateInFrontend: true },
    ],
    badge: "Most popular",
    active: true,
    maxUsers: 3,
  },
  {
    id: undefined,
    serviceId: "",
    tier: 3,
    title: "Unlimited 🚀",
    image: "",
    description:
      "Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.",
    prices: [
      {
        id: undefined,
        serviceId: "",
        type: SubscriptionPriceType.Recurring,
        billingPeriod: SubscriptionBillingPeriod.Monthly,
        price: 3,
        currency: "usd",
        trialDays: 14,
        active: true,
      },
      {
        id: undefined,
        serviceId: "",
        type: SubscriptionPriceType.Recurring,
        billingPeriod: SubscriptionBillingPeriod.Monthly,
        price: 60,
        currency: "mxn",
        trialDays: 14,
        active: true,
      },
      {
        id: undefined,
        serviceId: "",
        type: SubscriptionPriceType.Recurring,
        billingPeriod: SubscriptionBillingPeriod.Monthly,
        price: 2.55,
        currency: "eur",
        trialDays: 14,
        active: true,
      },
      {
        id: undefined,
        serviceId: "",
        type: SubscriptionPriceType.Recurring,
        billingPeriod: SubscriptionBillingPeriod.Yearly,
        price: 30,
        currency: "usd",
        trialDays: 14,
        active: true,
      },
      {
        id: undefined,
        serviceId: "",
        type: SubscriptionPriceType.Recurring,
        billingPeriod: SubscriptionBillingPeriod.Yearly,
        price: 600,
        currency: "mxn",
        trialDays: 14,
        active: true,
      },
      {
        id: undefined,
        serviceId: "",
        type: SubscriptionPriceType.Recurring,
        billingPeriod: SubscriptionBillingPeriod.Yearly,
        price: 25.5,
        currency: "eur",
        trialDays: 14,
        active: true,
      },
    ],
    features: [
      { id: undefined, order: 1,  key: "maxNumberOfUsers", value: "10", included: true, translateInFrontend: true },
      { id: undefined, order: 2,  key: "feature2", value: "", included: true, translateInFrontend: true },
      { id: undefined, order: 3,  key: "feature3", value: "", included: true, translateInFrontend: true },
      { id: undefined, order: 4,  key: "feature4", value: "", included: true, translateInFrontend: true },
      { id: undefined, order: 5,  key: "feature5", value: "", included: true, translateInFrontend: true },
    ],
    badge: "",
    active: true,
    maxUsers: 10,
  },
];

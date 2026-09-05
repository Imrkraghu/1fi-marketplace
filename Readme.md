# 1Fi Marketplace

A React Native marketplace application built with **Expo** as part of the 1Fi assignment.

The app provides a complete marketplace and EMI-based purchase flow where users can browse products, select variants, choose EMI plans, enter their delivery address, and complete an order.

## Features

* 🛍️ Marketplace product listing
* 🔎 Search interface
* 🏷️ Marketplace tabs
* 📱 Product details screen
* 🎨 Product variant selection
* 💰 Variant-specific pricing
* 💳 Variant-specific EMI plans
* 📊 Automatic lowest EMI calculation
* 🧾 Order summary
* 📍 Delivery address input
* ✅ Order success screen
* 🔄 Complete navigation flow
* 📱 Mobile-friendly UI

## User Flow

```text
Marketplace
    ↓
Product Details
    ↓
Select Variant
    ↓
Select EMI Plan
    ↓
Order Summary
    ↓
Enter Delivery Address
    ↓
Place Order
    ↓
Order Successful
```

## Tech Stack

* React Native
* Expo
* Expo Go
* TypeScript
* React Navigation
* React Hooks
* FlatList
* StyleSheet
* Native React Native components

## Project Structure

```text
1fi-assignment/
│
├── assets/
│
├── components/
│   ├── EmptyState.tsx
│   ├── HeroBanner.tsx
│   ├── MarketPlaceTabs.tsx
│   ├── ProductCard.tsx
│   └── SearchBar.tsx
│
├── data/
│   └── MarketPlaceData.ts
│
├── screens/
│   ├── MarketplaceScreen.tsx
│   ├── ProductDetailsScreen.tsx
│   ├── OrderSummaryScreen.tsx
│   └── OrderSuccessScreen.tsx
│
├── types/
│   ├── products.ts
│   └── navigation.ts
│
├── navigation/
│   └── AppNavigator.tsx
│
├── App.tsx
├── package.json
└── README.md
```

> The exact folder structure may vary depending on your Expo project setup.

## Requirements

Before running the project, make sure you have:

* Node.js installed
* npm or Yarn
* Expo CLI / Expo tooling
* Expo Go installed on your Android or iOS device

You can install **Expo Go** from the App Store or Google Play Store.

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd onefi-assignment
```

Install dependencies:

```bash
npm install
```

## Run with Expo

Start the Expo development server:

```bash
npx expo start
```

This will open the Expo development tools and display a QR code in the terminal.

### Using Expo Go

1. Install **Expo Go** on your phone.
2. Make sure your phone and computer are connected to the same Wi-Fi network.
3. Run:

```bash
npx expo start
```

4. Scan the QR code using:

   * Expo Go on Android
   * The Camera app on iOS

The application will open directly in Expo Go.

### Using Android Emulator

If you have an Android emulator configured:

```bash
npx expo start --android
```

### Using iOS Simulator

On macOS with an iOS simulator:

```bash
npx expo start --ios
```

## Development Commands

Start Expo:

```bash
npx expo start
```

Start with cache cleared:

```bash
npx expo start -c
```

Run on Android:

```bash
npx expo start --android
```

Run on iOS:

```bash
npx expo start --ios
```

Run TypeScript checks:

```bash
npx tsc --noEmit
```

## Navigation

The application uses a typed navigation stack:

```text
Marketplace
    ↓
ProductDetails
    ↓
OrderSummary
    ↓
OrderSuccess
```

Products are passed to the product details screen:

```ts
navigation.navigate("ProductDetails", {
  product: item,
});
```

The selected product, variant, and EMI plan are passed to the order summary:

```ts
navigation.navigate("OrderSummary", {
  product,
  selectedVariant,
  selectedEmiPlan,
});
```

After the order is placed:

```ts
navigation.navigate("OrderSuccess", {
  orderId,
});
```

## Product & EMI Logic

Products support multiple variants, and each variant can have its own:

* Price
* EMI plans
* Tenure
* Interest rate
* Total payable amount

When the user changes the selected variant, the EMI plans displayed on the product details screen automatically change to match that variant.

The application also calculates and displays the lowest monthly EMI.

Example:

```ts
{
  id: "iphone-15-128",
  name: "128 GB",
  price: "₹69,900",
  emiPlans: [
    {
      id: "emi-6",
      tenure: 6,
      monthlyEmi: 11650,
      interestRate: 0,
      totalPayable: 69900
    }
  ]
}
```

## Screens

### Marketplace

The main marketplace screen displays available products and marketplace tabs.

### Product Details

Users can:

* View product information
* Select a product variant
* View variant-specific pricing
* View variant-specific EMI plans
* Select an EMI plan
* See the lowest available EMI

### Order Summary

Users can review:

* Product
* Selected variant
* Product price
* EMI plan
* Monthly EMI
* Tenure
* Interest rate
* Total payable amount
* Delivery address

### Order Success

After placing the order, users see:

* Order confirmation
* Order ID
* Order status
* EMI information
* Next steps
* Continue shopping option

## Design

The application follows a consistent mobile-first design using:

* Purple primary color: `#6D28D9`
* Light background: `#F5F5F5`
* Rounded cards
* Clear typography hierarchy
* Bottom-fixed CTAs
* Simple and clean layouts

## Data

The current application uses local/static product data rather than a backend API.

Product information is stored in:

```text
data/MarketPlaceData.ts
```

This can later be replaced with an API or database.

## Future Improvements

Potential improvements include:

* Backend/API integration
* Real product inventory
* User authentication
* Persistent cart
* Address management
* Payment gateway integration
* Real EMI eligibility calculation
* Order tracking
* Order history
* Product filtering and sorting
* Functional search
* Loading states
* Error handling
* Persistent orders

## Assignment

This project was developed as part of the **1Fi Marketplace assignment**, demonstrating a complete product discovery and EMI-based purchase experience using React Native and Expo.
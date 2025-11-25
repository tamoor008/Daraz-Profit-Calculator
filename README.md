# Daraz Profit Calculator

A React + Vite + TypeScript application for calculating profitability of Daraz orders. The UI is split into reusable, self-contained modules so future features can be added without touching existing surfaces.

## Features

- Modular calculator module exposing composable input and results panels
- Strongly typed inputs, hooks, and utilities for safer future enhancements
- Category selector powered by `src/data/commissions.json` with searchable type-ahead and auto-filled commissions
- Manual commission override plus Free Shipping Max & Voucher Max safety switches
- VAT logic mirrors real Daraz deductions (VAT on shipping, handling fees, Daraz commissions, and promo subsidies; none on selling price)
- Real-time calculation updates with live ROI insights
- Modern, responsive UI

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Usage

1. Enter your order parameters:
   - Category (type to search; auto-applies the commission but can be overridden)
   - Daraz Commission % (editable)
   - Payment Handling Fee %
   - Selling Price
   - VAT %
   - Shipping Charges
   - Purchasing Price
   - Extra Charges
   - Packing Price
   - Order Handling Price
2. View calculated results:
   - VAT Charges
   - Daraz Charges
   - Net Revenue
   - Profit
   - ROI %

## Architecture

- `src/modules/calculator` — feature module containing hooks, components, constants, and styles
- `src/data/commissions.json` — hierarchical Daraz commission reference sheet used to populate the dropdown
- `src/styles` — shared global and app-level styles
- `src/modules/calculator/utils` — pure functions for profitability math
- `src/modules/calculator/types` — shared TypeScript contracts for forms and calculations


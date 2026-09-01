# 1. Project Overview
Annapurna is a digital marketplace connecting buyers with home kitchens and makers of homemade products (like meals, pickles, and snacks). It emphasizes a "Ghar ka swaad" (taste of home) experience, focusing on hygienic, safe, and authentic culinary heritage.

**Apparent Target Users**:
- **Buyers**: Users who browse home-cooked meals/products, manage their cart, select delivery options, and checkout.
- **Sellers/Kitchens**: Home chefs and makers who manage their kitchen profile, customize offerings, and track orders via a dashboard.

# 2. Tech Stack Detected
- **Framework/Library**: Plain HTML (no React, Next.js, Flutter, or any JS framework detected). No `package.json` or build tools are present in the current export.
- **Styling Approach**: Tailwind CSS via CDN (`<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>`). Custom configuration injected via a `<script id="tailwind-config">` block in `code.html` files.
- **State Management, Routing & Data-Fetching**: None. The project currently consists of fully static HTML files with inline placeholder data. Routing is non-existent (links use `href="#"`).
- **Icons & Fonts**: Google Fonts (DM Sans, Plus Jakarta Sans) and Google Material Symbols Outlined.

# 3. Project Structure
- `stitch_annapurna_homemade_marketplace/` (Root Export Directory)
  - `annapurna_marketplace/`: Contains `DESIGN.md` (Design system documentation).
  - `annapurna_home_screen/`: Buyer's home feed showcasing meals and categories.
  - `anita_s_kitchen_customization/`: Example of a seller/kitchen profile and menu page.
  - `checkout_address_delivery_selection/`: Checkout flow - Address/Delivery selection.
  - `checkout_payment_method_selection/`: Checkout flow - Payment method selection.
  - `shopping_cart_delivery_selection/`: Buyer's shopping cart UI.
  - `seller_home_dashboard/`: Dashboard interface for sellers to manage orders/items.
  - `login_screen/` & `choose_your_role/`: Auth and user onboarding flows.
  - `nearby_kitchen_discovery_feed/`, `homemade_products_marketplace/`, `pickles_category_listing/`: Assorted browse/discovery screens for buyers.
  - `[various image folders]`: Standalone images and illustrations.
  
*Observed Naming Convention*: `snake_case` directory names for screens, with each containing a `code.html` file (for markup) and a `screen.png` (for visual reference).

# 4. Screens/Pages Inventory
**Shared/Auth Flow**:
- `annapurna_logo`: Static logo display.
- `annapurna_splash_screen`: Initial load/splash screen.
- `choose_your_role`: Selection screen between Buyer and Seller/Chef.
- `login_screen`: Authentication form.

**Buyer Flow**:
- `annapurna_home_screen`: Main feed featuring popular meals and categories.
- `nearby_kitchen_discovery_feed`: Discovery screen for finding local kitchens.
- `homemade_products_marketplace`: Marketplace view for distinct homemade products.
- `pickles_category_listing`: Category-specific product listing (e.g., Pickles).
- `anita_s_kitchen_customization`: Specific kitchen's storefront/menu.
- `shopping_cart_delivery_selection`: Cart review and basic delivery options.
- `checkout_address_delivery_selection`: Address input and delivery preference.
- `checkout_payment_method_selection`: Payment selection before order placement.

**Seller Flow**:
- `seller_home_dashboard`: Dashboard for sellers to view active orders and stats.

*State*: Every screen currently renders static HTML with hardcoded placeholders/images. They are completely unconnected and not wired to any logic.

# 5. Design System Extracted
Extracted from `DESIGN.md` and inline Tailwind configs:
- **Color Palette**:
  - Primary (Terracotta Orange): `#9f3d00`
  - Secondary (Forest Green): `#1b6d24`
  - Background/Surface (Warm Cream): `#fff8f0`
  - On-Surface: `#1e1b16`
  - Error: `#ba1a1a`
- **Typography Scale**:
  - Headings (DM Sans):
    - `headline-xl`: 48px, line-height 56px, weight 700
    - `headline-lg`: 32px, line-height 40px, weight 700
    - `headline-md`: 24px, line-height 32px, weight 600
  - Body/Labels (Plus Jakarta Sans):
    - `body-lg`: 18px, weight 400
    - `body-md`: 16px, weight 400
    - `label-md`: 14px, weight 600
    - `label-sm`: 12px, weight 500
- **Spacing Units**: `xs` (4px), `base` (8px), `sm` (12px), `gutter` (20px), `md` (24px), `lg` (48px), `xl` (80px), `margin-mobile` (16px), `margin-desktop` (64px).
- **Rounded Corners**: `sm` (0.25rem), `DEFAULT` (0.5rem), `lg` (0.5rem config override / 1rem in DESIGN.md), `xl` (0.75rem config / 1.5rem DESIGN), `2xl` (1.5rem config override), `full` (9999px). 
- **Reusable Components (Observed)**: 
  - Cards with `.soft-shadow` (0 8px 24px rgba(112, 87, 64, 0.08)) and a 24px/`rounded-2xl` radius.
  - Action buttons with `rounded-full` (pill shapes).

# 6. Data Model Gaps
The UI implies several entities that have no backing data models, schemas, or interfaces in the code:
- **User**: ID, Name, Role (Buyer/Seller), Phone, Auth Token.
- **Seller/Kitchen**: Name, Rating, Delivery Time, Address/Location, Active Status, Description.
- **Meal/Product**: ID, Title, Price, Kitchen ID, Category (e.g., Veg/Non-Veg), Image URL.
- **Order**: Items array, Quantities, Total Price, Status (Pending/Accepted/Prep/Delivered), Buyer ID, Seller ID.
- **Cart**: Session-based cart items, selected delivery method.
- **Address**: Street, City, State, ZIP, Label (Home/Work).
- **Review/Rating**: Stars, Text, Order ID.

*Flag*: Every screen currently displays data with no backing schema or mock data source (e.g., `annapurna_home_screen/code.html` hardcodes meal names and prices).

# 7. Missing Logic / TODOs
- **Navigation**: All anchor tags `<a href="#">` and `<button>` elements lack event handlers or routing logic.
- **Interactivity**: 
  - Quantity increment/decrement buttons in the Cart screen are static.
  - Checkbox/Radio button selection in Payment and Address screens are purely visual.
  - Role selection toggle in `choose_your_role` is un-wired.
  - Search inputs across screens are static and non-functional.
  - Notification icon badges (e.g., the '3' on the bell icon) are hardcoded.
- **Content**: Images are pulled directly via long Google User Content URLs with AI-generated `data-alt` placeholder texts. Many descriptive texts are static placeholders.

# 8. Known Constraints (From Product Requirements)
*Note: None of these constraints currently have explicit UI representations, logic, or state management in the static HTML codebase.*
- **Single-seller cart per order**: Buyers cannot mix items from multiple kitchens. *(No UI logic prevents this yet).*
- **Advance Deposit**: Pre-orders require a mandatory advance deposit. *(No UI showing 'deposit' amounts found in Checkout).*
- **Daily Order Capacity**: Seller sets daily order capacity/limits; orders auto-accept only within capacity. *(No UI for sellers to set limits in Dashboard).*
- **Subscriptions**: Support for pause/resume/renew/cancel. *(No subscription UI found).*
- **Cancellation Policy**: Buyer cancels after prep starts → deposit forfeited; Seller cancels without valid reason → full refund to buyer + fine to seller. *(No cancellation flow UI found).*
- **Ratings Detail**: Ratings are tied to a specific order and cover food quality, product quality, taste, hygiene, packaging, delivery experience. *(Only generic 1-5 star UI exists currently, no granular breakdown).*

# 9. Open Decisions
Unresolved product questions affecting implementation:
- **Cart Model**: Enforcement of Single-seller vs Multi-seller cart (and how it impacts DB schema/UI constraints).
- **Delivery Model**: Self-delivery by seller vs Partner integration (e.g., Dunzo/Shadowfax API).
- **Compliance**: Display requirements for FSSAI licenses on Kitchen pages.
- **Subscriptions**: Rules for pause/resume (e.g., cutoff times) given that UI is missing.
- **Business Model**: Commission structure and Seller payout cycles (daily, weekly?).

# 10. Next Steps for Development
1. **Repository Setup**: Initialize a proper project with a framework (e.g., Next.js or React + Vite) and begin migrating the static HTML/Tailwind elements to reusable components.
2. **Data Modeling**: Define TypeScript interfaces/types for User, Kitchen, Product, and Order based on the Data Model Gaps.
3. **Routing**: Setup a router (e.g., React Router or Next.js App Router) and wire up basic navigation between the existing static screens.
4. **State Management**: Implement a global store (e.g., Zustand or Redux) to handle Cart state and enforce the "Single-seller cart" constraint.
5. **Backend/API Integration**: Setup mock APIs or connect to a Backend-as-a-Service (Supabase/Firebase) to replace hardcoded content.
6. **Authentication**: Wire up the `login_screen` and `choose_your_role` flows to a real Auth provider.

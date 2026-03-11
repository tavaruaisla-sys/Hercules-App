# Plan: Replace Content on Section Pamper Package

The user wants to replace the content of the "Pamper Package" section in `BestDealSection.tsx` with specific real data consisting of 8 packages. The current implementation displays artist-like profiles (with avatars and ratings), which needs to be adapted to display service packages.

## User Requirements
- Replace existing "Pamper Package" content with 8 specific cards.
- **Card 1**: Refreshing (1.5 hours) - Balinese massage, Body Scrub — IDR. 350.000
- **Card 2**: Nourishing (2 hours) - Balinese massage, Biokos Facial — IDR. 400.000 / Collagen upgrade — IDR. 450.000
- **Card 3**: Relaxation (2 hours) - Warm stone massage & cream bath — IDR. 450.000
- **Card 4**: Balance (2 hours) - Balinese massage, pedi or mani, no colour — IDR. 500.000
- **Card 5**: Harmony (2.5 hours) - Balinese massage, body scrub, facial & cream bath — IDR. 750.000
- **Card 6**: Perfect celebration (2.5 hours) - Deanna signature massage & 1.5 hours facial-collagen: Couple — IDR. 900.000 / Per person — IDR. 500.000
- **Card 7**: Ratus V - Local treatment assist with menstrual discomfort & infection. Feel fresh & eliminate odour — IDR. 200.000
- **Card 8**: Kiddies spa - Massage, scrub (chocolate) 1 hr — IDR. 200.000 / 30 Min — IDR. 150.000 / Nail colour — IDR. 150.000

## Proposed Changes

### 1. Modify `src/pages/home/_components/BestDealSection.tsx`

#### Update Data Structure (`pamperPackages`)
- Update the `pamperPackages` array to contain the 8 new items.
- Change `price` type from `number` to `string` to support "IDR" formatting and ranges.
- Remove `rating`, `reviews`, `avatar` fields as they are not relevant for service packages.
- Map the user's data to:
    - `name`: Package Title (e.g., "Refreshing")
    - `role`: Description (e.g., "Balinese massage, Body Scrub")
    - `duration`: Duration (e.g., "1.5 hours")
    - `price`: Price string (e.g., "IDR 350.000")
    - `image`: Reuse existing images or assign appropriate placeholders.

#### Update `PackageCard` Component
- Remove `avatar` image.
- Remove `rating` (StarIcon) and `reviews`.
- Update Price display:
    - Remove `$` prefix.
    - Display the `price` string directly.
- Update Layout:
    - Since `avatar` is removed, the layout can be simplified.
    - Ensure `role` (description) can handle longer text (multi-line).
    - Ensure `name` (title) is prominent.

## Steps
1.  **Read** `src/pages/home/_components/BestDealSection.tsx` (Done).
2.  **Edit** `src/pages/home/_components/BestDealSection.tsx`:
    -   Redefine `pamperPackages` array with the 8 new items.
    -   Update `PackageCard` component to match the new data structure (remove avatar/ratings, update price/duration display).
3.  **Verify** the changes by checking the file content.

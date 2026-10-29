# Responsive Design Checklist

Use this checklist to verify that a website or web application adapts correctly to different screen sizes, orientations, and input methods.

The goal is to provide a consistent, readable, and functional experience across mobile, tablet, laptop, and desktop devices.

## 1. Layout and Structure

- [ ] The layout adapts to different viewport widths.
- [ ] Content follows a logical reading order.
- [ ] Grid and flex layouts resize or rearrange appropriately.
- [ ] Fixed-width elements do not overflow their containers.
- [ ] Images and media scale within their available space.
- [ ] Cards, navigation, sidebars, and columns adapt to smaller screens.
- [ ] Spacing remains consistent and appropriate across breakpoints.
- [ ] Important content is not hidden unintentionally on smaller screens.

## 2. Mobile-First CSS

- [ ] Base styles provide a usable experience on small screens.
- [ ] Media queries are added only when the layout requires adjustments.
- [ ] Breakpoints are chosen according to the content, not specific device models.
- [ ] Styles are organized to avoid unnecessary duplication.
- [ ] Reusable values, such as colors, spacing, and typography, use CSS custom properties where appropriate.
- [ ] The viewport meta tag is present in HTML.

Example:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## 3. Navigation

- [ ] Navigation links fit comfortably within the available width.
- [ ] Menus do not overlap page content.
- [ ] Mobile navigation is usable with touch and keyboard input.
- [ ] If a collapsible menu is used, its open and closed states are clear.
- [ ] Interactive menu controls communicate their state to assistive technologies.
- [ ] Navigation remains consistent across pages.

## 4. Typography and Readability

- [ ] Text remains readable on small screens.
- [ ] Font sizes and line heights adapt where necessary.
- [ ] Long headings and words do not break the layout.
- [ ] Paragraphs have comfortable line lengths.
- [ ] Buttons and links have readable labels.
- [ ] Text does not overlap or become clipped.
- [ ] Content remains readable at increased browser zoom.

## 5. Images and Media

- [ ] Images scale without distortion.
- [ ] Images do not exceed their containers.
- [ ] Appropriate image dimensions are provided to reduce layout shifts.
- [ ] Large images are optimized for file size.
- [ ] Responsive image sources are used when they provide a meaningful performance benefit.
- [ ] Videos and embedded content fit within their containers.
- [ ] Essential image content remains visible at different viewport widths.

Useful CSS example:

```css
img,
video {
  max-width: 100%;
  height: auto;
}
```

## 6. Forms and Interactive Elements

- [ ] Form fields fit within their containers.
- [ ] Labels and validation messages remain readable.
- [ ] Buttons are large enough for comfortable touch interaction.
- [ ] Interactive elements have sufficient spacing.
- [ ] Dropdowns and other controls remain usable on touchscreens.
- [ ] No essential interaction depends exclusively on hover.
- [ ] Focus indicators remain visible on all screen sizes.

## 7. Overflow and Edge Cases

- [ ] The page does not have unintended horizontal scrolling.
- [ ] Long URLs and unbroken text do not overflow containers.
- [ ] Tables have an appropriate responsive strategy.
- [ ] Long lists and large cards remain usable.
- [ ] Modals and dialogs fit within the viewport.
- [ ] Sticky or fixed elements do not cover essential content.
- [ ] Browser zoom and narrow viewport widths do not break the layout.

## 8. Responsive Testing

Test the page at several viewport widths, including:

- [ ] Small mobile: approximately 320–375 px.
- [ ] Standard mobile: approximately 390–430 px.
- [ ] Tablet: approximately 768–1024 px.
- [ ] Laptop: approximately 1280–1440 px.
- [ ] Large desktop: approximately 1600 px and above.

These are testing examples, not mandatory breakpoint values.

- [ ] Test both portrait and landscape orientation where relevant.
- [ ] Resize the browser gradually to identify layout breaks between common screen sizes.
- [ ] Test touch interactions when possible.
- [ ] Verify that content remains usable at 200% zoom.
- [ ] Check the page using Chrome DevTools Device Mode.
- [ ] Test on a real mobile device when possible.

## 9. Performance and Stability

- [ ] Images and other assets are appropriately optimized.
- [ ] The page avoids unnecessary layout shifts during loading.
- [ ] Animations do not cause distracting or excessive movement.
- [ ] Responsive styles do not introduce unnecessary complexity.
- [ ] The page remains usable while content is loading.

## 10. Issue Tracking

Record responsive issues discovered during testing.

| Issue | Viewport | Impact | Status |
|---|---|---|---|
| Example: Navigation wraps unexpectedly | 375 px | Medium | Open |

Suggested status values: `Open`, `In Progress`, `Resolved`, `Not Applicable`.

## Final Review

- [ ] The layout has been checked at all relevant viewport sizes.
- [ ] No unintended horizontal overflow remains.
- [ ] Navigation and interactive elements work across input methods.
- [ ] Typography and spacing remain comfortable.
- [ ] Remaining limitations are documented.

**Review date:** YYYY-MM-DD

**Project:** Project name

**Outstanding issues:**

- Issue 1
- Issue 2

**Note:** Responsive design is not limited to making a page fit a smaller screen. Content, navigation, readability, interaction, and accessibility must remain usable as the available space changes.


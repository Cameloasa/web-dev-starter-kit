# Web Accessibility Checklist

Use this checklist to review the accessibility of a web application or website.

The goal is to make the interface usable by as many people as possible, including people who use keyboards, screen readers, or other assistive technologies.

**How to use this checklist**

- [ ] Mark an item when it has been checked and meets the requirement.
- [ ] Mark an item as not applicable when it does not apply to the project.
- [ ] Record unresolved issues and prioritize fixes based on their impact.

## 1. HTML Structure and Semantics

- [ ] The document declares the correct language using the `lang` attribute.
- [ ] The page has a descriptive title.
- [ ] HTML elements are used according to their purpose.
- [ ] Semantic landmarks such as `header`, `nav`, `main`, and `footer` are used appropriately.
- [ ] Heading levels follow a logical hierarchy.
- [ ] Lists use appropriate list elements.
- [ ] Links are used for navigation, and buttons are used for actions.
- [ ] Interactive elements do not contain invalid nested interactive elements.

## 2. Images and Media

- [ ] Informative images have meaningful alternative text.
- [ ] Decorative images use an empty `alt` attribute (`alt=""`) when appropriate.
- [ ] Images do not use filenames as alternative text.
- [ ] Images containing important text provide that information in an accessible form.
- [ ] Videos with meaningful audio have captions.
- [ ] Audio or video content has appropriate alternatives when needed.
- [ ] Animations and moving content do not create unnecessary barriers.

## 3. Keyboard Navigation

- [ ] All interactive elements can be reached using the keyboard.
- [ ] Interactive elements follow a logical focus order.
- [ ] Keyboard focus is clearly visible.
- [ ] No interactive element traps keyboard focus.
- [ ] Custom controls support the expected keyboard interactions.
- [ ] Menus, dialogs, and other complex components can be operated using the keyboard.
- [ ] Users can reach and operate all essential functionality without a mouse.

**Manual test:** Navigate the entire page using `Tab`, `Shift + Tab`, `Enter`, `Space`, and the arrow keys where appropriate.

## 4. Color and Visual Presentation

- [ ] Text has sufficient contrast against its background.
- [ ] Large text and essential interface elements have appropriate contrast.
- [ ] Color is not the only way information is communicated.
- [ ] Text remains readable when zoomed in.
- [ ] Content can reflow at narrow viewport widths without unnecessary horizontal scrolling.
- [ ] Text spacing can be increased without loss of content or functionality.
- [ ] Links are visually distinguishable from surrounding text.
- [ ] Content remains understandable when styles are disabled, where applicable.

## 5. Forms and User Input

- [ ] Every form control has an accessible name.
- [ ] Labels are programmatically associated with their controls.
- [ ] Required fields are identified clearly.
- [ ] Instructions are provided when a format or specific input is required.
- [ ] Errors are described in text, not only through color.
- [ ] Error messages identify the affected field and explain how to correct the problem.
- [ ] Validation messages are available to assistive technologies when necessary.
- [ ] Form submission and confirmation messages are accessible.
- [ ] Users have an opportunity to review or correct important submissions where appropriate.

## 6. Links, Buttons, and Controls

- [ ] Link text communicates the destination or purpose.
- [ ] Buttons have clear, descriptive names.
- [ ] Icon-only controls have accessible names.
- [ ] Controls communicate their state when relevant.
- [ ] Disabled and unavailable states are distinguishable.
- [ ] Touch targets are large enough and sufficiently separated for comfortable interaction.
- [ ] Repeated navigation or interface patterns behave consistently.

## 7. Dynamic Content and Motion

- [ ] Important status messages can be detected by assistive technologies.
- [ ] Dynamic updates do not unnecessarily interrupt screen-reader users.
- [ ] Loading, success, and error states are communicated clearly.
- [ ] Animations respect the `prefers-reduced-motion` preference where appropriate.
- [ ] Auto-playing movement or flashing content does not create avoidable barriers.
- [ ] Dialogs and overlays manage focus correctly.
- [ ] Focus returns to an appropriate location when a dialog closes.

## 8. Responsive Design and Zoom

- [ ] The interface works on mobile, tablet, and desktop.
- [ ] Content remains usable at 200% zoom.
- [ ] Text can be resized without loss of content or functionality.
- [ ] Portrait and landscape orientations are supported where relevant.
- [ ] Essential functionality does not depend exclusively on hover.
- [ ] Controls remain visible and usable on touchscreens.

## 9. Testing Tools and Manual Review

Use a combination of automated tools and manual testing. Automated tools can identify many issues, but they cannot confirm that a page is fully accessible.

- [ ] Run an accessibility audit using Lighthouse in Chrome DevTools.
- [ ] Inspect browser console errors and relevant warnings.
- [ ] Navigate the page using only the keyboard.
- [ ] Check text and interface contrast using an appropriate contrast checker.
- [ ] Inspect form labels, accessible names, and focus behavior.
- [ ] Test with a screen reader when possible.
- [ ] Check the interface at different viewport sizes and zoom levels.
- [ ] Manually review issues reported by automated tools.

## 10. Issue Tracking

Record accessibility issues discovered during testing.

| Issue | Location | Impact | Status |
|---|---|---|---|
| Example: Missing form label | Contact form | High | Open |

Suggested status values: `Open`, `In Progress`, `Resolved`, `Not Applicable`.

## Final Review

- [ ] All applicable checks have been completed.
- [ ] Critical accessibility barriers have been addressed.
- [ ] Remaining limitations have been documented.
- [ ] The page has been tested with both automated tools and manual checks.

**Review date:** YYYY-MM-DD

**Project:** Project name

**Outstanding issues:**

- Issue 1
- Issue 2

**Note:** This checklist supports accessibility reviews but does not certify WCAG compliance. For formal conformance, evaluate the applicable WCAG success criteria and their requirements.


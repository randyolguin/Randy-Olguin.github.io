# How to add a project

You only need to edit one file: `projects.js`.

## 1. Add your images

Create a folder named `assets/projects` in the repository. Upload a JPG, PNG, WebP, or SVG with a short filename, for example:

`assets/projects/drum-clamp.jpg`

Before publishing a work-related image, confirm that it contains no export-controlled, proprietary, customer-sensitive, drawing, serial-number, badge, screen, or shop-floor information. For public program imagery, read the source site's reuse terms and add a credit. Do not assume “publicly visible” means free to reuse.

## 2. Add a project entry

Open `projects.js`. Copy one complete object inside `window.portfolioProjects`, paste it before the final `];`, and update its values:

```js
{
  title: "Your Project Name",
  tags: ["SolidWorks", "Testing", "FEA"],
  summary: "One sentence explaining the problem and what you did.",
  details: [
    "What you designed, built, analyzed, or tested.",
    "A decision you made and why.",
    "How you verified the result."
  ],
  result: "Use a number when possible: 12% faster, 0.005 in less deflection, or 20 hours saved.",
  visual: "clamp",
  image: "assets/projects/your-project.jpg",
  imageAlt: "Clear description of the image for visitors using screen readers",
  imageCredit: "Photographer or organization name",
  imageCreditUrl: "https://source-page.example/image",
  link: "https://github.com/your-username/your-project",
  featured: false
},
```

If you do not have an image yet, leave `image`, `imageAlt`, `imageCredit`, and `imageCreditUrl` as empty strings. Set `visual` to `clamp`, `thermal`, or `systems` to use a built-in technical illustration.

For a larger featured case study like HALS, copy the entire HALS entry instead. Its optional `metrics`, `highlights`, and `gallery` fields create the manufacturing summary, numbered scope items, and image grid. Keep `caseStudy: true` on only your strongest project so the page stays focused.

## 3. Tell the engineering story

The strongest portfolio projects answer five questions:

1. What problem were you solving?
2. What constraints mattered?
3. What did you personally do?
4. How did you verify the design?
5. What changed as a measurable result?

A useful project has 3–6 images: an overview, CAD or diagram, a build/test photo, an analysis result, and a final result. Caption each one so a recruiter can understand it in ten seconds.

For team projects, clearly label your contribution. Describe shared system goals as team work, then use first-person language only for the parts you personally designed, machined, assembled, tested, or documented.

## 4. Publish the update

On GitHub, open the repository and choose **Add file → Upload files**. Upload the changed `projects.js` and any new images, then commit the changes to the branch used by GitHub Pages. Refresh the live site after a minute or two.

## Public-program image checklist

- Prefer an official press-kit or media-library download.
- Use the exact credit requested by the source.
- Link the credit to the original page.
- Download the file into your repository instead of hotlinking it.
- Keep mission context separate from your personal contribution.
- Never publish internal photos, screenshots, dimensions, drawings, serial numbers, or test data without written approval.

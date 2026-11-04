# Fonts

The design system uses **Inter** for display, headings, and body text, and **IBM Plex Mono** for code and technical labels.

## Expected local assets

```text
public/fonts/
├── Inter/
│   ├── Inter-Variable.ttf
│   └── OFL.txt
└── IBM-Plex-Mono/
    ├── IBMPlexMono-Variable.ttf
    └── OFL.txt
```

## Official sources
- Inter: https://github.com/google/fonts/tree/main/ofl/inter
- IBM Plex: https://github.com/IBM/plex
- IBM Plex releases: https://github.com/IBM/plex/releases

Both families are distributed under the SIL Open Font License. Keep the corresponding license text with the font files and verify the license included with the exact release you download.

## Status
Font folders are included in this foundation, but font binaries are not bundled because the build environment could not retrieve external binary assets. Add the official font files using the filenames above before rendering. No substitute fonts are included.

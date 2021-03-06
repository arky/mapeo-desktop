# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [4.1.0-beta.4](https://github.com/digidem/mapeo-desktop/compare/v4.1.0-beta.3...v4.1.0-beta.4) (2019-09-17)


### Bug Fixes

* Fix sync error by updating mapeo-server ([e3b44ba](https://github.com/digidem/mapeo-desktop/commit/e3b44ba))

## [4.1.0-beta.3](https://github.com/digidem/mapeo-desktop/compare/v4.1.0-beta.2...v4.1.0-beta.3) (2019-09-17)


### Bug Fixes

* Fix errors with background imagery when using custom backgrounds ([e45278d](https://github.com/digidem/mapeo-desktop/commit/e45278d))
* update to latest iD with fix for slowdown at startup ([14416e9](https://github.com/digidem/mapeo-desktop/commit/14416e9))

## [4.1.0-beta.2](https://github.com/digidem/mapeo-desktop/compare/v4.1.0-beta.1...v4.1.0-beta.2) (2019-09-13)


### Features

* Add Windows Code signing ([7627e7b](https://github.com/digidem/mapeo-desktop/commit/7627e7b))

## [4.1.0-beta.1](https://github.com/digidem/mapeo-desktop/compare/v4.1.0-beta.0...v4.1.0-beta.1) (2019-09-13)

## [4.1.0-beta.0](https://github.com/digidem/mapeo-desktop/compare/v4.0.1-beta...v4.1.0-beta.0) (2019-09-13)


### Bug Fixes

* Fix Windows build
* Fix ability to drag/move window on Mac
* Fix "generando indices" never completing after failed sync
* New Mapeo-Core: only show most recently edited observation if two different people have edited the same observation on different devices
* Latest updates to MapFilter
* Fix import progress

### New Features

* Mac app is signed, no need to right-click to open on first install
* Export ShapeFile from MapEditor

## 4.0.1-beta

### New Features

- **Database upgrade to Kappa**, which brings speed and reliability improvements.
  This also means that your existing data will need to be migrated, which
currently is a manual process. Please see the
[mapeo-migrate](http://github.com/digidem/mapeo-migrate) repository for details
on how to migrate your data.

- **Import from asar files** You can now import `asar` files and `tar` files
  directly. Raw directories are no longer supported from the Import Files menu,
but you can import them in the filesystem under `styles/default/tiles`

- **Sync progress** will now be shown in the Sync screen.

- **Faster Startup** Mapeo should load much faster now.

### Breaking Changes

- Spanish by default.

- Map tiles and aerial imagery now must be referenced from under a `styles`
  directory. If you were using background imagery in 3.x, you will need to
change your URL from `/Offline-Maps/...` to `/styles/Offline-Maps/...`.

- You can override mapfilter styles by importing into the user data folder
  `styles/default`, instead of `styles/mapfilter-style`. This will make feature
parity between mobile and desktop.


- Presets require a namespace now, which is `default`. If you don't see your
  presets from a previous installation, you'll need to re-import the
configuration file from **File->Import configuration**

### Bug Fixes

- Map Filter should work much faster and more reliably now, a number of bug
  fixes were introduced.

### Known Issues

- See the [KNOWN_ISSUES.md](/docs/KNOWN_ISSUES.md) file for the complete set of
  known issues.

## 3.1.1

### Bug Fixes
- Typo: change a misnamed function

## 3.1.0

### New Features
- Users can now override mapfilter styles by importing into the user data folder under `styles/mapfilter-style`

## 3.0.6

### Cleanup
- Remove unused appDmg dependency

## 3.0.5

### New Features
- Zoom to Data is now more accurate: now it zooms to the location with the most data, rather than the middle of the dataset, using a low-resolution node density tilemap

### Bug Fixes
- Update to the lastest Map Filter with latest fixes

## 3.0.4

### Bug Fixes
- Remove electron-devtools-installer

## 3.0.3

### Bug Fixes
- Fix map zooming bug in Map Filter view
- Properly display timestamp of when a point was created
- Update to the lastest Map Filter with latest fixes
## 3.0.2

### Bug fixes

-  Welcome pages are now scrollable and in view when on tiny screens and the
   links are now colors that match the text
-  Syncing while on the MapFilter view no longer refreshes the page when
   finished
-  When closing the sync modal, the page you were on stays the same

## 3.0.1

### Bug fixes

- Fixed a bug where some fields in an observation in the MapFilter view were
  not editable.

## 3.0.0

### Breaking Changes

- The new syncfile format created by Mapeo 3.0.0 is not compatible with older
  versions of Mapeo Desktop.

### New Features

- **Two-way syncronization with Mapeo Mobile.** You can now export and import a file that will syncronize your media, observations, and places between both Desktop and Mobile.
- Switch more easily between the Editor and Filter views with an improved menu

### Bug Fixes

- Images attached to observations in Mapeo mobile will now display in MapFilter
- Errors are handled more gracefully during sync
- Fix print layout in Filter View
- Improve feature handling in Filter View

### Code Improvements

- Implemented a new integration test harness that automates the workflow of
  a user.

## 1.13.1 - 2017-12-02
### Fixed
- GeoJSON export works again

## 1.13.0 - 2017-11-14
### Fixed
- 'Jungle' presets are used instead of Bengal presets when choosing to start a jungle map on 1st launch
### Changed
- Major improvements to 'Zoom to Data' feature

## 1.12.0 - 2017-10-27
## Added
- Added a live `lat, lon` label to the bottom right corner, indicating where in
  the world the view currently is
- Added a 'Go to Lat/Lon' feature in the menu that lets you enter a lat,lon pair
  of numbers and have the map zoom there

## 1.11.3 - 2017-10-20
## Fixed
- Welcome screen fixes & improvements

## 1.11.2 - 2017-10-20
## Fixed
- Welcome screen fixes & improvements

## 1.11.1 - 2017-10-20
## Fixed
- Welcome screen fixes & improvements

## 1.11.0 - 2017-10-20
## Added
- The first time app is loaded, show welcome page with example datasets to pick
  from
- English translation


## 1.10.2 - 2017-08-30
### Fixed
- Fixed broken Windows/Mac builds
- Removed unused development dependencies

## 1.10.1 - 2017-08-30
**BROKEN BUILD**
### Fixed
- Tried to fix broken builds (failed)

## 1.10.0 - 2017-08-30
### Fixed
- GeoJSON export now contains the same data as the visual map display
### Optimized
- 'Regenerating Indexes' only takes ~60% as long as before!

## 1.9.5 - 2017-07-17
### Fixed
- Fixed electron version bundling issue that was causing the Windows installer to crash
- Re-enabled `npm prune` during Windows packaging (results in smaller EXE sizes)
- Fixed Windows builds by forcing Appveyor to use npm@5.2.0

## 1.9.4 - 2017-07-17
**BROKEN BUILD**
### Notes
- Tried to fix build by disabling `npm prune` during Windows packaging

## 1.9.3 - 2017-07-17
**BROKEN BUILD**
### Fixed
- Add missing dependencies

## 1.9.2 - 2017-07-17
**BROKEN BUILD**
### Fixed
- App no longer crashes when a GeoJSON export is performed

## 1.9.1 - 2017-07-14
**BROKEN BUILD**
### Fixed
- Fixed 'unknown entity' errors caused by osm-p2p-server omitting deleted nodes

## 1.9.0 - 2017-07-11
**BROKEN BUILD**
### Added
- Added versioning information to osm-p2p-db indexes
- Added an "indexes generating" dialog when index generation is in progress on
  start-up
### Removed
- Took out old (unused) data migration logic

## 1.8.3 - 2017-07-06
### Fixed
- App no longer crashes when no presets are present

## 1.8.2 - 2017-05-19

## 1.8.1 - 2017-05-17
### Fixed
- Fixed 'Export as GeoJSON..' menu option

## [1.8.0] - 2017-05-06
### Changed
- Removed 255 char restriction on text fields

## [1.7.0] - 2017-04-30
### Added
- Add deforking to GeoJSON export
- Add GeoJSON Export menu item
### Fixed
- Use latest metadata.json for displaying dialogs
- Removed unused dev dep: browserify


## [1.2.3] - 2016-10-30

### Changed
- Use osm-p2p-geojson for export

### Added
- Cloud build scripts for Mac & Windows
- Create DMG installer for Mac

## [1.2.2] - 2016-09-22

### Changed
- Update dep to osm-p2p-server-veta3

## [1.2.0] - 2016-08-17
### Added
- Custom icons

### Changed
- Import settings / configuration from a single file

## 1.1.0 - 2016-08-05

Start of Change Log

[1.8.0]: https://github.com/digidem/mapeo-desktop/compare/v1.7.0...v1.8.0
[1.7.0]: https://github.com/digidem/mapeo-desktop/compare/v1.2.3...v1.7.0
[1.2.3]: https://github.com/digidem/mapeo-desktop/compare/v1.2.2...v1.2.3
[1.2.2]: https://github.com/digidem/mapeo-desktop/compare/v1.2.0...v1.2.2
[1.2.0]: https://github.com/digidem/mapeo-desktop/compare/v1.1.0...v1.2.0

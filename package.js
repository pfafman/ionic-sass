Package.describe({
  name: 'pfafman::ionic-sass',
  summary: "Ionic's CSS Framework in SASS and bundled for Meteor.",
  version: '0.3.3',
  git: 'https://github.com/pfafman/ionic-sass'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use("fourseven:scss@3.8.0", ["client"]);
  api.imply("fourseven:scss", ["client"]);

  api.addFiles([
    'stylesheets/_action-sheet.scss',
    'stylesheets/_animations.scss',
    'stylesheets/_backdrop.scss',
    'stylesheets/_badge.scss',
    'stylesheets/_bar.scss',
    'stylesheets/_button-bar.scss',
    'stylesheets/_button.scss',
    'stylesheets/_checkbox.scss',
    'stylesheets/_form.scss',
    'stylesheets/_grid.scss',
    'stylesheets/_items.scss',
    'stylesheets/_list.scss',
    'stylesheets/_loading.scss',
    'stylesheets/_menu.scss',
    'stylesheets/_mixins.scss',
    'stylesheets/_modal.scss',
    'stylesheets/_platform.scss',
    'stylesheets/_popover.scss',
    'stylesheets/_popup.scss',
    'stylesheets/_progress.scss',
    'stylesheets/_radio.scss',
    'stylesheets/_range.scss',
    'stylesheets/_refresher.scss',
    'stylesheets/_reset.scss',
    'stylesheets/_scaffolding.scss',
    'stylesheets/_select.scss',
    'stylesheets/_slide-box.scss',
    'stylesheets/_spinner.scss',
    'stylesheets/_tabs.scss',
    'stylesheets/_toggle.scss',
    'stylesheets/_transitions.scss',
    'stylesheets/_type.scss',
    'stylesheets/_util.scss',
    'stylesheets/_variables.scss'
  ], 'client', {isImport:true});

  api.addFiles('_ionic.scss', 'client');
});

import CMS, { init } from 'netlify-cms'
import NetlifyCmsWidgetI18n from 'netlify-cms-widget-i18n'
const {controlComponent, previewComponent} = NetlifyCmsWidgetI18n;
console.log('ehmmm')
CMS.registerWidget('i18n', controlComponent, previewComponent)
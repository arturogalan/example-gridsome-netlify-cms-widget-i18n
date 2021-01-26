import CMS from 'netlify-cms'
import NetlifyCmsWidgetI18n from 'netlify-cms-widget-i18n'

CMS.registerWidget('i18n', I18nControl, I18nPreview)
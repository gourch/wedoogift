import { ElementRef, Injectable } from '@angular/core';

import { MDCComponent } from '@material/base';

import * as banner from '@material/banner/index';
import * as checkbox from '@material/checkbox/index';
import * as chips from '@material/chips/index';
import * as circularProgress from '@material/circular-progress/index';
import * as dataTable from '@material/data-table/index';
import * as dialog from '@material/dialog/index';
import * as drawer from '@material/drawer/index';
import * as floatingLabel from '@material/floating-label/index';
import * as formField from '@material/form-field/index';
import * as iconButton from '@material/icon-button/index';
import * as lineRipple from '@material/line-ripple/index';
import * as linearProgress from '@material/linear-progress/index';
import * as list from '@material/list/index';
import * as menuSurface from '@material/menu-surface/index';
import * as menu from '@material/menu/index';
import * as notchedOutline from '@material/notched-outline/index';
import * as radio from '@material/radio/index';
import * as ripple from '@material/ripple/index';
import * as segmentedButton from '@material/segmented-button/index';
import * as select from '@material/select/index';
import * as slider from '@material/slider/index';
import * as snackbar from '@material/snackbar/index';
import * as switchControl from '@material/switch/index';
import * as tabBar from '@material/tab-bar/index';
import * as tabIndicator from '@material/tab-indicator/index';
import * as tabScroller from '@material/tab-scroller/index';
import * as tab from '@material/tab/index';
import * as textField from '@material/textfield/index';
import * as tooltip from '@material/tooltip/index';
import * as topAppBar from '@material/top-app-bar/index';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private allSelectors = [
    '.mdc-banner',
    '.mdc-checkbox',
    '.mdc-evolution-chip-set',
    '.mdc-circular-progress',
    '.mdc-data-table',
    '.mdc-dialog',
    '.mdc-drawer',
    '.mdc-floating-label',
    '.mdc-form-field',
    '.mdc-icon-button',
    '.mdc-line-ripple',
    '.mdc-linear-progress',
    '.mdc-list',
    '.mdc-menu-surface',
    '.mdc-menu',
    '.mdc-notched-outline',
    '.mdc-segmented-button',
    '.mdc-radio',
    '.mdc-ripple-surface',
    '.mdc-select',
    '.mdc-slider',
    '.mdc-snackbar',
    '.mdc-switch',
    '.mdc-tab-bar',
    '.mdc-tab-indicator',
    '.mdc-tab-scroller',
    '.mdc-tab',
    '.mdc-text-field',
    '.mdc-text-field-icon',
    '.mdc-text-field-character-counter',
    '.mdc-text-field-helper-text',
    '.mdc-tooltip',
    '.mdc-top-app-bar',
    '.mdc-button',
    '.mdc-fab',
    '.mdc-card__primary-action',
  ];

  mdcComponents: MDCComponent<any>[] = [] as MDCComponent<any>[];

  initialize(element: ElementRef): MDCComponent<any>[] {
    this.allSelectors.forEach(selector => {
      Array.from((element.nativeElement.querySelectorAll(selector)) as [Element]).forEach((el) => {
        switch (selector) {
          case '.mdc-banner':
            const mdcBanner = new banner.MDCBanner(el);
            this.mdcComponents.push(mdcBanner);
            break;
          case '.mdc-checkbox':
            const mdcCheckbox = new checkbox.MDCCheckbox(el);
            this.mdcComponents.push(mdcCheckbox);
            break;
          case '.mdc-evolution-chip-set':
            const mdcChips = new chips.MDCChipSet(el);
            this.mdcComponents.push(mdcChips);
            break;
          case '.mdc-circular-progress':
            const mdcCircularProgress = new circularProgress.MDCCircularProgress(el);
            this.mdcComponents.push(mdcCircularProgress);
            break;
          case '.mdc-data-table':
            const mdcDataTable = new dataTable.MDCDataTable(el);
            this.mdcComponents.push(mdcDataTable);
            break;
          case '.mdc-dialog':
            const mdcDialog = new dialog.MDCDialog(el);
            this.mdcComponents.push(mdcDialog);
            break;
          case '.mdc-drawer':
            const mdcDrawer = drawer.MDCDrawer.attachTo(el);
            this.mdcComponents.push(mdcDrawer);
            break;
          case '.mdc-floating-label':
            const mdcFloatingLabel = new floatingLabel.MDCFloatingLabel(el);
            this.mdcComponents.push(mdcFloatingLabel);
            break;
          case '.mdc-form-field':
            const mdcFormField = new formField.MDCFormField(el);
            ['mdc-checkbox', 'mdc-radio'].forEach(selector => {
              Array.from(mdcFormField.root.querySelectorAll(selector)).forEach((el) => {
                switch (selector) {
                  case '.mdc-checkbox':
                    const mdcCheckboxInput = new checkbox.MDCCheckbox(el);
                    mdcFormField.input = mdcCheckboxInput;
                    break;
                  case '.mdc-radio':
                    const mdcRadioInput = new radio.MDCRadio(el);
                    mdcFormField.input = mdcRadioInput;
                    break;
                  default:
                    this.mdcComponents.push(mdcFormField);
                    break;
                }
              });
            });
            break;
          case '.mdc-icon-button':
            // const mdcIconButton = new ripple.MDCRipple(el);
            const mdcIconButtonToggle = new iconButton.MDCIconButtonToggle(el);
            this.mdcComponents.push(mdcIconButtonToggle);
            break;
          case '.mdc-line-ripple':
            const mdcLineRipple = new lineRipple.MDCLineRipple(el);
            this.mdcComponents.push(mdcLineRipple);
            break;
          case '.mdc-linear-progress':
            const mdcLinearProgress = new linearProgress.MDCLinearProgress(el);
            this.mdcComponents.push(mdcLinearProgress);
            break;
          case '.mdc-list':
            const mdcList = new list.MDCList(el);
            mdcList.listElements.map((listItemEl) =>
              this.mdcComponents.push(new ripple.MDCRipple(listItemEl))
            );
            mdcList.singleSelection = true;
            mdcList.wrapFocus = true;
            this.mdcComponents.push(mdcList);
            break;
          case '.mdc-menu-surface':
            const mdcMenuSurface = new menuSurface.MDCMenuSurface(el);
            this.mdcComponents.push(mdcMenuSurface);
            break;
          case '.mdc-menu':
            const mdcMenu = new menu.MDCMenu(el);
            this.mdcComponents.push(mdcMenu);
            break;
          case '.mdc-notched-outline':
            const mdcNotchedOutline = new notchedOutline.MDCNotchedOutline(el);
            this.mdcComponents.push(mdcNotchedOutline);
            break;
          case '.mdc-segmented-button':
            const mdcSegmentedButton = new segmentedButton.MDCSegmentedButton(el);
            this.mdcComponents.push(mdcSegmentedButton);
            break;
          case '.mdc-radio':
            const mdcradio = new radio.MDCRadio(el);
            this.mdcComponents.push(mdcradio);
            break;
          case '.mdc-ripple-surface':
            const mdcRippleSurface = new ripple.MDCRipple(el);
            this.mdcComponents.push(mdcRippleSurface);
            break;
          case '.mdc-select':
          case '.mdc-select-table':
            const mdcSelect = new select.MDCSelect(el);
            this.mdcComponents.push(mdcSelect);
            break;
          case '.mdc-slider':
            const mdcSlider = new slider.MDCSlider(el);
            this.mdcComponents.push(mdcSlider);
            break;
          case '.mdc-snackbar':
            const mdcSnackbar = new snackbar.MDCSnackbar(el);
            this.mdcComponents.push(mdcSnackbar);
            break;
          case '.mdc-switch':
            const mdcSwitch = new switchControl.MDCSwitch(el as HTMLButtonElement);
            this.mdcComponents.push(mdcSwitch);
            break;
          case '.mdc-tab-bar':
            const mdcTabBar = new tabBar.MDCTabBar(el);
            this.mdcComponents.push(mdcTabBar);
            break;
          case '.mdc-tab-indicator':
            const mdcTabIndicator = new tabIndicator.MDCTabIndicator(el);
            this.mdcComponents.push(mdcTabIndicator);
            break;
          case '.mdc-tab-scroller':
            const mdcTabScroller = new tabScroller.MDCTabScroller(el);
            this.mdcComponents.push(mdcTabScroller);
            break;
          case '.mdc-tab':
            const mdcTab = new tab.MDCTab(el);
            this.mdcComponents.push(mdcTab);
            break;
          case '.mdc-text-field':
            const mdcTextField = new textField.MDCTextField(el);
            this.mdcComponents.push(mdcTextField);
            break;
          case '.mdc-text-field-icon':
            const mdcTextFieldIcon = new textField.MDCTextFieldIcon(el);
            this.mdcComponents.push(mdcTextFieldIcon);
            break;
          case '.mdc-text-field-helper-text':
            const mdcTextFieldHelperText = new textField.MDCTextFieldHelperText(el);
            this.mdcComponents.push(mdcTextFieldHelperText);
            break;
          case '.mdc-text-field-character-counter':
            const mdcTextFieldCharacterCounter = new textField.MDCTextFieldCharacterCounter(el);
            this.mdcComponents.push(mdcTextFieldCharacterCounter);
            break;
          case '.mdc-tooltip':
            const mdcTooltip = new tooltip.MDCTooltip(el);
            this.mdcComponents.push(mdcTooltip);
            break;
          case '.mdc-top-app-bar':
            const mdcTopAppBar = new topAppBar.MDCTopAppBar(el);
            this.mdcComponents.push(mdcTopAppBar);
            break;
          case '.mdc-button':
          case '.mdc-fab':
          case '.mdc-card__primary-action':
            this.mdcComponents.push(new ripple.MDCRipple(el));
            break;
          default:
            break;
        }
      });
    });

    return this.mdcComponents;
  }
}

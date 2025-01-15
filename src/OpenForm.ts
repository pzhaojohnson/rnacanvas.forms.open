import * as styles from './OpenForm.module.css';

import { DragTranslater } from '@rnacanvas/forms';

import { detectMacOS } from '@rnacanvas/utilities';

/**
 * Explains to the user how to open saved drawings.
 */
export class OpenForm {
  readonly domNode = document.createElement('div');

  #dragTranslater;

  constructor() {
    this.domNode.classList.add(styles['open-form']);

    this.domNode.append(Title());

    let contentContainer = ContentContainer();
    this.domNode.append(contentContainer);

    contentContainer.append(HowToOpen());

    contentContainer.append(ErrorMessagesLocation());

    contentContainer.append(HowToOpenConsole());

    contentContainer.append(HowToSave());

    contentContainer.append(DefaultSavedDrawingFilesLocation());

    let closeButton = CloseButton();
    closeButton.addEventListener('click', () => this.close());
    this.domNode.append(closeButton);

    this.#dragTranslater = new DragTranslater(this.domNode);
  }

  close() {
    this.domNode.remove();
  }

  appendTo(container: Node): void {
    this.#dragTranslater.untranslate();

    container.appendChild(this.domNode);
  }
}

function Title() {
  let domNode = document.createElement('p');

  domNode.classList.add(styles['title']);

  domNode.textContent = 'Open a Saved Drawing';

  return domNode;
}

/**
 * For the content of the Open form.
 */
function ContentContainer() {
  let domNode = document.createElement('div');

  domNode.classList.add(styles['content-container']);

  return domNode;
}

function P(...content: (string | HTMLSpanElement)[]) {
  let domNode = document.createElement('p');

  domNode.classList.add(styles['text']);

  domNode.append(...content);

  return domNode;
}

function BoldSpan(textContent: string) {
  let domNode = document.createElement('span');

  domNode.textContent = textContent;

  domNode.style.fontWeight = '700';

  return domNode;
}

function HowToOpen() {
  let dragNDrop = BoldSpan("Drag-n'-drop");

  let copyAndPaste = BoldSpan('copy-and-paste');

  let dotRNAcanvas = BoldSpan('.rnacanvas');

  return P(dragNDrop, ' or ', copyAndPaste, ' a saved drawing file (with ', dotRNAcanvas, ' extension) anywhere in the app to open it.');
}

function ErrorMessagesLocation() {
  let domNode = P('Any error messages (e.g., for invalid drawing files) will appear in the web browser console.');

  domNode.style.marginTop = '53px';

  return domNode;
}

function HowToOpenConsole() {
  let keyBinding = BoldSpan(detectMacOS() ? 'Option+Command+I' : 'Ctrl+Shift+I');

  let Console = BoldSpan('Console');

  let domNode = P('The web browser console can be opened by pressing ', keyBinding, ' and selecting the ', Console, ' tab.');

  domNode.style.margin = '20px 0px 0px 27px';

  return domNode;
}

function HowToSave() {
  let Save = BoldSpan('Save');

  let keyBinding = BoldSpan(detectMacOS() ? 'Command+S' : 'Ctrl+S');

  let domNode = P('Drawings can be saved using the ', Save, ' button towards the top-left corner of the app or by pressing ', keyBinding, '.');

  domNode.style.marginTop = '66px';

  return domNode;
}

function DefaultSavedDrawingFilesLocation() {
  let Downloads = BoldSpan('Downloads');

  let domNode = P('Saved drawing files will be downloaded to your ', Downloads, " folder by default (unless you've changed this setting in your web browser).");

  domNode.style.marginTop = '37px';

  return domNode;
}

function CloseButton() {
  let domNode = document.createElement('p');

  domNode.classList.add(styles['close-button']);

  domNode.textContent = 'Close';

  return domNode;
}

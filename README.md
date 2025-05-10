# Installation

With `npm`:

```
npm install @rnacanvas/forms.open
```

# Usage

## `class OpenForm`

The Open form component.

```javascript
// can be imported as a named import
import { OpenForm } from '@rnacanvas/forms.open';

// create a new Open form instance
var openForm = new OpenForm();

// the DOM node corresponding to the Open form
openForm.domNode;

// add the Open form to the document body
// (the Open form has absolute positioning by default)
document.body.append(openForm.domNode);
```

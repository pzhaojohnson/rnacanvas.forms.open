/**
 * @jest-environment jsdom
 */

import { OpenForm } from './OpenForm';

describe('`class OpenForm`', () => {
  it('renders', () => {
    var openForm = new OpenForm();

    var n = document.body.childNodes.length;

    expect(() => document.body.append(openForm.domNode)).not.toThrow();

    expect(document.body.childNodes.length).toBe(n + 1);
  });
});

# element is detached from the DOM



I have a very simple page with a **select** box and a **text field**. The select box **submits** the page on every change.

I have this very simple test spec:

- select something from the box
- type something in the field

```
cy.get("select").select("Second")
cy.get("input").type("Hallo")
```

This used to work perfectly fine with Chrome 80. Since Chrome 83, the second `cy.get()` throws an error:

> Timed out retrying: cy.type() failed because this element is detached from the DOM.
> 
> `<input>`

As a workaround, we had to put an explicit `cy.wait(100)` between the two commands.

```
cy.get("select").select("Second")
cy.wait(100)
cy.get("input").type("Hallo")
```

As we had quite a lot of those, this slowed down our tests. Also I don't think these should be required here. (I only just now noticed something curious, even a `cy.wait(0)` will work, at least in the testcase linked below)

This works in Firefox, and in Chrome version 80 (which I luckily still had on an old machine). As Google makes it almost impossible to download an older Chrome version, I couldn't really try different versions.

Cypress version otoh doesn't really seem to matter, it happens in old versions as well as in current version.

Here is a small repo which reproduces the problem. Simply run`npm start`.
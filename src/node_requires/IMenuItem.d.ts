declare interface IMenu {
    opened?: boolean;
    // eslint-disable-next-line no-use-before-define
    items: IMenuItem[];
    columns?: number;
}

declare interface IMenuItem {
    /**
     * The name of the item, depicted graphically
     */
    label?: string,
    /**
     * An optional hint shown as a tooltip or below the main label
     */
    hint?: string,
    /**
     * A name of an svg icon, e.g. 'check'.
     * See the list of icons in the main ct.js menu for the full list.
     */
    icon?: string,
    /** Defaults to 'feather' */
    iconClass?: string,
    /**
     * The type of the item.
     * 'checkbox' replaces an icon with a checkbox input.
     * 'separator' does not require any other properties and they make no effect on it.
     * 'item' is the default value.
     */
    type?: 'checkbox' | 'separator' | 'item',
    /**
     * Optional data object to be provided to a callback when an item is clicked.
     */
    affixedData?: Record<string, unknown>,
    /**
     * The callback triggered when a user clicks this menu item. The callback is passed with
     * `affixedData` object (if there was any).
     */
    click?: (affixedData: Record<string, unknown>) => void,
    /**
     * Valid for 'checkbox' type.
     * Reports the current state of the checkbox.
     * For dynamic checkboxes, you need a function returning a boolean.
     */
    checked?: boolean | (() => boolean),
    submenu?: IMenu,

    /**
     * E.g. 'Control+c'
     */
    hotkey?: string,
    /**
     * A human-readable variant, e.g. 'Ctrl+C'. Fallbacks to `hotkey`.
     */
    hotkeyLabel?: string
}

/**
 * Shows an "open file" dialog, allowing a user to select files or folders.
 *
 * @param {object} [options] An object with settings
 * @param {boolean} [options.openDirectory] Whether or not to choose a directory instead of files
 * @param {string} [options.defaultPath] The path at which browsing starts
 * @param {string} [options.title] An optional title that is shown at the top of the file browser.
 * @param {boolean} [options.multiple] Whether or not to allow selecting multiple files
 * (makes no sense with `openDirectory` enabled)
 * @param {boolean} [options.filter] A file filter.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept
 * @returns {Promise<Array<string>|string|false>}A promise that resolves
 * into a path to the selected file, or to an array of paths of files
 * (if options.multiple.)
 */
window.showOpenDialog = function showOpenDialog(options = {}) {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.style.opacity = 0;
    input.style.position = 'fixed';
    input.style.right = '100%';
    input.style.bottom = '100%';
    document.body.appendChild(input);
    if (options.openDirectory) {
        input.setAttribute('nwdirectory', 'nwdirectory');
    }
    if (options.defaultPath) {
        input.setAttribute('nwworkingdir', options.defaultPath);
    }
    if (options.title) {
        input.setAttribute('nwdirectorydesc', options.title);
    }
    if (options.multiple) {
        input.setAttribute('multiple', 'multiple');
    }
    if (options.filter) {
        input.setAttribute('accept', options.filter);
    }
    const promise = new Promise((resolve) => {
        input.oncancel = () => {
            resolve(false);
            document.body.removeChild(input);
        };
        input.onchange = () => {
            if (options.multiple) {
                resolve(input.value.split(';'));
            } else {
                resolve(input.value);
            }
            document.body.removeChild(input);
        };
    });
    input.click();
    return promise;
};
/**
 * Shows a "save file" dialog.
 *
 * @param {object} [options] An object with settings
 * @param {string} [options.defaultPath] The path at which browsing starts
 * @param {string} [options.defaultName] The proposed file's name
 * @param {boolean} [options.filter] A file filter. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept
 * @returns {Promise<string|false>} A promise that resolves into a full path to a target file
 * if the user proceeded to save a file, and into `false` if the user cancelled the operation.
 */
window.showSaveDialog = function showSaveDialog(options = {}) {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.style.opacity = 0;
    input.style.position = 'fixed';
    input.style.right = '100%';
    input.style.bottom = '100%';
    document.body.appendChild(input);
    if (options.defaultPath) {
        input.setAttribute('nwworkingdir', options.defaultPath);
    }
    if (options.defaultName) {
        input.setAttribute('nwsaveas', options.defaultName);
    } else {
        input.setAttribute('nwsaveas', '');
    }
    if (options.filter) {
        input.setAttribute('accept', options.filter);
    }
    const promise = new Promise((resolve) => {
        input.oncancel = () => {
            resolve(false);
            document.body.removeChild(input);
        };
        input.onchange = () => {
            resolve(input.value);
            document.body.removeChild(input);
        };
    });
    input.click();
    return promise;
};

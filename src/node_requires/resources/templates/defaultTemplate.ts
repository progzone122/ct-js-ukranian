const generateGUID = require('./../../generateGUID');

const defaultTemplate = {
    type: 'template' as resourceType,
    name: 'NewTemplate',
    depth: 0,
    texture: -1 as assetRef,
    playAnimationOnStart: false,
    loopAnimation: true,
    visible: true,
    extends: {},
    events: [] as IScriptableEvent[]
};

module.exports = {
    get(): ITemplate {
        return ({
            ...defaultTemplate,
            extends: {},
            lastmod: Number(new Date()),
            uid: generateGUID()
        });
    }
};

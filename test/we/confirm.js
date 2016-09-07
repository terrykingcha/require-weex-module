import __weex_require__ from '../../src/index';

const modal = __weex_require__('@weex-module/modal');

export default function(message, okTitle, cancelTitle, callback) {
    modal.confirm({message, okTitle, cancelTitle}, callback);
}
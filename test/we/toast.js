import __weex_require__ from '../../src/index';

const modal = __weex_require__('@weex-module/modal');

export default function(message) {
    modal.toast({message});
}
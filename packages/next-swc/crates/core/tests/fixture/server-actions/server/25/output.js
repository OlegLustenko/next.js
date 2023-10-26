/* __next_internal_action_entry_do_not_use__ {"6d53ce510b2e36499b8f56038817b9bad86cabb4":"$$ACTION_0","188d5d945750dc32e2c842b93c75a65763d4a922":"$$ACTION_1"} */ import { createActionProxy } from "private-next-rsc-action-proxy";
import { encryptActionBoundArgs, decryptActionBoundArgs } from "private-next-rsc-action-encryption";
import deleteFromDb from 'db';
export function Item({ id1, id2 }) {
    id1++;
    return (()=>{
        id1++;
        return <Button action={deleteItem}>Delete</Button>;
    })();
    async function deleteItem(...args) {
        return $$ACTION_0.apply(null, (deleteItem.$$bound || []).concat(args));
    }
    createActionProxy("6d53ce510b2e36499b8f56038817b9bad86cabb4", deleteItem);
}
export async function $$ACTION_0($$ACTION_CLOSURE_BOUND) {
    var [$$ACTION_ARG_0, $$ACTION_ARG_1] = await decryptActionBoundArgs("6d53ce510b2e36499b8f56038817b9bad86cabb4", $$ACTION_CLOSURE_BOUND);
    await deleteFromDb($$ACTION_ARG_0);
    await deleteFromDb($$ACTION_ARG_1);
}
// In this example, if Button immediately executes the action, different ids should
// be passed.
export function Item2({ id1, id2 }) {
    id1++;
    const temp = [];
    temp.push(<Button action={deleteItem}>Delete</Button>);
    id1++;
    temp.push(<Button action={deleteItem}>Delete</Button>);
    return temp;
    async function deleteItem(...args) {
        return $$ACTION_1.apply(null, (deleteItem.$$bound || []).concat(args));
    }
    createActionProxy("188d5d945750dc32e2c842b93c75a65763d4a922", deleteItem);
}
export async function $$ACTION_1($$ACTION_CLOSURE_BOUND) {
    var [$$ACTION_ARG_0, $$ACTION_ARG_1] = await decryptActionBoundArgs("188d5d945750dc32e2c842b93c75a65763d4a922", $$ACTION_CLOSURE_BOUND);
    await deleteFromDb($$ACTION_ARG_0);
    await deleteFromDb($$ACTION_ARG_1);
}

/** [ DSL TRANSFORM COMPLETE ] */
/* eslint-disable */

/** [ DSL TRANSFORM ORIGINAL CODE SHA512 ] */
// fa0bb714e2d38a2e3de550fd6cbd32c8e640ced3b872e6c354ce7af81f77937b22f275a04c08c244514af77dcc971111d98895df8b1174f0243fca97316b63e0

/** [ DSL TRANSFORM ORIGINAL CODE ] */
// eJxtjj0LwjAURff8irelBWnV0ZBBKE6ig2Mpomnahn6kvCSIlP53q61WwTu+d87lqrrVaKGD6LQ/Hw8LsNLYSGaqkdBDhroGWrk8l0gZUW/4Ce1cI6zSTaTdtZL4oYMgNChCox0KOUhjMSNkbvZoNsmQTrYptKtSuGksqc+gIzCkkhZU0zq7RbzcgUO8Stjr83P9s8abAX80RCFFufkS42UCnHNYM9KTB3yAWDs=

/** [ DSL TRANSFORM COMPILER VERSION ] */
// 5.1.8

/** [ DSL TRANSFORM HEADER SECTION END ] */

/** [ DSL TRANSFORMED CODE SECTION ] */
import { getRuntime as getDslRuntime, __fnr, __BlockContextRoot, __ScopeContextRoot } from 'ts-dsl'
const $rt = getDslRuntime()
$rt.__dsl_flow_controller_import(__filename, true);
$rt.__match_compiler_version('5.1.8');
const __ctxr = new __ScopeContextRoot('file', null, { file: __filename });
const __ctx = __ctxr;
const __fn = __fnr;
const __blkr = new __BlockContextRoot(__ctx);
const __blk = __blkr;
const $r = $rt.__last_computed_v;
const __lbls = $rt.__validate_labeled_contexts({"check":1});
const $n = null;


/** [ DSL INSTRUMENTATION INIT SECTION ] */
import { getRuntime as getInstrumentedRuntime } from 'ts-dsl';
import $ccdata from './sample.test.ts._instr.json';
const $irt = getInstrumentedRuntime();
const $proc = $irt.cc.uniqueFileRuntimeTracker(`tests/sample.test.ts`, $ccdata);
const $hit = $irt.cc.getCodeCoverageHitters(`tests/sample.test.ts`, $proc);

import { DSL_ON as DSL_ON, testDefine as testDefine } from 'lugger';
import { testFunctionDoubler } from '../src/source';
$rt.__flow(0, '3:1', __ctx, __blk, 'EXPR', '', () => $hit.stmt('3:1'));
DSL_ON;
$rt.__flow(0, '5:1', __ctx, __blk, 'EXPR', '', () => $hit.stmt('5:1'));
$rt.cw('5:1', 0, $n, __ctx, __blk, testDefine, "testDefine", 'function doubler should work', async (__ctx) => {
    $hit.blk('5:45');
    const $r = $rt.__last_computed_v;
    const __blk_5_45 = await $rt.__new_blk('5:45', true, false, __ctx, null, __blkr, $r);
    const __blk = __blk_5_45;
    try {
        $rt.__flow(1, '6:5', __ctx, __blk, 'EXPR', '', () => $hit.stmt('6:5'));
        let inputArray = [1];
        $rt.__flow(0, '7:5', __ctx, __blk, 'EXPR', '', () => $hit.stmt('7:5'));
        inputArray = await $rt.__call('7:18', 1, __blk, testFunctionDoubler, [inputArray]);
        $rt.__flow(0, '8:5', __ctx, __blk, 'EXPR', '', () => $hit.stmt('8:5'));
        await $rt.__lbl('8:5', __ctx, __blk, 'check', async (__ctx) => {
            return $hit.expr('8:12', await $rt.__op('8:12', __ctx, __blk, "===", await $rt.__at(__ctx, __blk, 1, inputArray, 0), 2));
        })
    }
    catch (__e) {
        throw await $rt.__throw('5:45', __blk, __e);
    }
    await $rt.__end_blk('5:45', __blk_5_45);
})

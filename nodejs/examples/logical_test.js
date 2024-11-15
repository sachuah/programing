/*

Six falsy => false, null, undefined, NaN, 0, ''
Everything else is truthy
Note that [] {} are also truthy

Conjunction (A &&  B) : True only if both A and B are true
Disjunction (A ||  B) : False only if both A and B are false
Implication (A ->  B) : A is false or B is true;  If A is true return/follow B, else return true
Bicondition (A === B)

Double negation (!!A) = A
Commutation (A || B)  === (B | A)   : Take note that nodejs evaluate from left-to-right.
            (A && B)  === (B && A)
            (A === B) === (B === A)
Association (A || B || C || D) === (((A || B) || C) || D)   : Conjuntion and Disjunction are binary operation 
            ((A || B) || C) === (A || (B || C))     : Same operator, rules still work
            ((A && C) && C) === (A && (B && C))     : Same operator, rules still work
Distribution (A && (B || C)) !== ((A && B) || C) : Association does not work in this case
            (A && (B || C)) === ((A && B) || (A && C)) : Factoring out a comman factor to make it work
            (A || (B && C)) === ((A || B) && (A || C)) : Factoring out a comman factor to make it work
            ((A || B) && (C || D)) === ((A || B) && C) || ((A || B) && D) : More example
            ((A || B) && C) || ((A || B) && D) === ((A && C) || B && C)) || ((A && D) || (B && D)) : More example
            (A || B) && (C || D) === (A && C) || (B && C) || (A && D) || (B && D)
            (A && B) || (C && D) === (A || C) && (B || C) && (A || D) && (B || D)
Material Implication (A -> B ) === (!A || B) : A is false or B is true
                     (T -> T ) === T
                     (T -> F ) === F
                     (F -> T ) === T
                     (F -> F ) === T
Tautology & Contradiction (A || !A)    === true
                          (A || true)  === true
                          (A && !A)    === false
                          (A && false) === false
                          (A || false) === A
                          (A && true)  === A
Material Equivalence (A === B) === ((A → B) && (B → A))
                     ((A → B) && (B → A)) === ((!A || B) && (!B || A))
                     ((!A || B) && (!B || A)) === ((!A && !B) || (B && !B)) || ((!A && A) || (B && A))
                     ((!A && !B) || (B && !B)) || ((!A && A) || (B && A)) === ((!A && !B) || (B && A))
                     ((!A && !B) || (B && A)) === ((A && B) || (!A && !B))
                     (A === B) === ((A && B) || (!A && !B))
Exportation (A → (B → C)) === ((A && B) → C) : if (A) {  if (B) {    C  }}// is equivalent toif (A && B) {  C}
DeMorgan’s Laws !(A || B) === !A && !B  : Negating a conjunction, negate each statement and change the || to &&
                !(A && B) === !A || !B  : Negating a disjunction, negate each statement and change the && to ||
Ternary (If-Then-Else) (A ? B : C)
                       (!A || B) && (A || C)
XOR (Exclusive Or) (A || B) && !(A && B)  : “A or B, but not both A and B" ; Direct translation; 
                   (A || B) && (!A || !B) : DeMorgan’s Laws
                   (!A || !B) && (A || B) : Commutativity
                   (A && !B) || (B && !A) : Contradiction replacement
                   A === !B or A !== B    : XOR in JavaScript
                   A ? !B : B             : if-then-else definition
                   (A && !A) || (A && !B) || (B && !A) || (B && !B) : Double-distribution
*/
/* *****************************************************
 * Note on || in javascript (OR)
 * =====================================================
    o1 = true  || true       // t || t returns true
    o2 = false || true       // f || t returns true
    o3 = true  || false      // t || f returns true
    o4 = false || (3 == 4)   // f || f returns false
    o5 = 'Cat' || 'Dog'      // t || t returns "Cat"
    o6 = false || 'Cat'      // f || t returns "Cat"
    o7 = 'Cat' || false      // t || f returns "Cat"
    o8 = ''    || false      // f || f returns false
    o9 = false || ''         // f || f returns ""
    o10 = false || varObject // f || object returns varObject
 */
    function logic_OR(A,B) {
        console.log (`${A} || ${B} ==> ${A || B }`)
    }
    const logic_OR_Test = () => { 
        console.log("\n========================");
        console.log("Logical OR Test         ");
        console.log("========================");
        logic_OR(true,true);
        logic_OR(true,false);
        logic_OR(false,true);
        logic_OR(false,false);
        logic_OR('Cat','Dog');
        logic_OR(false,'Cat');
        logic_OR('Cat',false);
        logic_OR('',false);
        logic_OR(false,'');   
     }
    
    /* *****************************************************
     * Note on || in javascript (OR)
     * =====================================================
        a1 = true  && true       // t && t returns true
        a2 = true  && false      // t && f returns false
        a3 = false && true       // f && t returns false
        a4 = false && (3 == 4)   // f && f returns false
        a5 = 'Cat' && 'Dog'      // t && t returns "Dog"
        a6 = false && 'Cat'      // f && t returns false
        a7 = 'Cat' && false      // t && f returns false
        a8 = ''    && false      // f && f returns ""
        a9 = false && ''         // f && f returns false
     */
    
     function logic_AND(A,B) {
        console.log (`${A} && ${B} ==> ${A && B }`)
    }
    const logic_AND_Test = () => { 
        console.log("\n=========================");
        console.log("Logical AND Test         ");
        console.log("=========================");
        logic_AND(true,true);
        logic_AND(true,false);
        logic_AND(false,true);
        logic_AND(false,false);
        logic_AND('Cat', 'Dog');
        logic_AND(false,'Cat');
        logic_AND('Cat',false);
        logic_AND('', false);
        logic_AND(false,'');
     }
    
    function logic_OrOr(A,B,C){
        console.log(`${A} || ${B} || ${C} ==> ${A || B || C}`);
    }
    function logic_AndAnd(A,B,C){
        console.log(`${A} && ${B} && ${C} ==> ${A && B && C}`);
    }
    function logic_OrAnd(A,B,C){
        console.log(`${A} || ${B} && ${C} ==> ${A || B && C}`);
    }
    function logic_AndOr(A,B,C){
        console.log(`${A} && ${B} || ${C} ==> ${A && B || C}`);
    }
    
    const logic_3arg = (func, Title) =>{
        console.log("\n================================");
        console.log(`Logical (${Title}) Test`);
        console.log("================================")
        func(true,  true,  true);
        func(true,  true,  false);
        func(true,  false, true);
        func(true,  false, false);
        func(false, true,  true);
        func(false, true,  false);
        func(false, false, true);
        func(false, false, false);
    }
    
    
    const main = ()=>{
        logic_OR_Test();
        logic_AND_Test();
        logic_3arg(logic_OrOr, "A || B || C ");
        logic_3arg(logic_AndAnd, "A && B && ");
        logic_3arg(logic_OrAnd, "A || B &&");
        logic_3arg(logic_AndOr, "A && B || C");
    }
    main();
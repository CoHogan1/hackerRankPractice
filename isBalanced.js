

const isBalanced = (s) => {
    let n = -1;
	while (s.length != n) {
		n = s.length;
		s = s.replace('()', '');
		s = s.replace('[]', '');
		s = s.replace('{}', '');
	}
	if (s.length == 0)
		return "YES"
	else
		return "NO"

}
console.log(isBalanced("[{()}[]]"))

//          [ { ( ) } [ ] ]
//          0 1 2 3 4 5 6 7
//          o o o c c o c c

//          { [ ( ] ) }
//          0 1 2 3 4 5
//          o o o c c c

// im findind the index of each bracket. if they close then they are balanced.


// char codes
//  ( = 40
//  ) = 41
//  [ = 91
//  ] = 93
//  { = 123
//  } = 125


const thisWorks(s){
    const openers = ['(', '{', '['];
    const closers = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    const bracket_stack = [];

    for (let i=0; i<s.length; i++) {
        const c = s.charAt(i);
        if (openers.includes(c)) {
            bracket_stack.push(c);
        } else if (closers[c]) {
            if (bracket_stack.length == 0) {
                return 'NO';
            }

            if (bracket_stack.pop() !== closers[c]) {
                return 'NO';
            }
        }
    }

    if (bracket_stack.length > 0) {
        return 'NO';
    }

    return 'YES';
}

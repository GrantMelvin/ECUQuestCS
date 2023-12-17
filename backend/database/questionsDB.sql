INSERT INTO questions (id, questiontype, questiontext, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES 
(1, 'Array', 'What is an array in C++?', 'A group of variables that share the same name and data type', 'A set of instructions for a computer to follow', 
'A data type that stores multiple values of the same data type in a single variable', 'A data type that stores a single value of any data type', 3, 3);
INSERT INTO questions (id, questiontype, questiontext, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)  
VALUES (2, 'Array', 'How do you declare an array in C++?', 'int array[5];', 'int array {5};', 
'array[5] int;', 'int[5] array;', 1, 3);
INSERT INTO questions (id, questiontype, questiontext, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)  
VALUES (3, 'Array', 'How do you access the third element of an array in C++?', 'array[2]', 'array[3]', 'array[4]', 'array[5]', 1, 3);
INSERT INTO questions (id, questiontype, questiontext, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)  
VALUES (4, 'Array', 'How do you find the length of an array in C++?', 'sizeof(array)', 'array.length()', 'sizeof(array) / sizeof(array[0])', 'strlen(array)', 3, 3);
INSERT INTO questions (id, questiontype, questiontext, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)  
VALUES (5, 'Array', 'Can you change the size of an array in C++ after it has been declared?', 'Yes', 'No', 'None', 'None', 2, 3);
INSERT INTO questions (id, questiontype, questiontext, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)  
VALUES (6, 'Array', 'Can you assign values to an array in C++ when you declare it?', 'Yes, using curly braces: int array[5] {1, 2, 3, 4, 5};', 
'Yes, using square brackets: int array[5] [1, 2, 3, 4, 5];', 'No, you must assign values to the array after declaring it', 
'No, arrays are immutable and cannot have their values changed', 1, 3);
INSERT INTO questions (id, questiontype, questiontext, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)  
VALUES (7, 'Array', 'How do you loop through all the elements of an array in C++ using a for loop?', 
'for (int i = 0; i < sizeof(array); i++)', 'for (int i = 0; i <= sizeof(array); i++)', 
'for (int i = 0; i < sizeof(array) / sizeof(array[0]); i++)', 'for (int i = 1; i <= sizeof(array); i++)', 3, 3);
INSERT INTO questions (id, questiontype, questiontext, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)  
VALUES (8, 'Array', 'Can you store multiple data types in a single array in C++?', 'Yes', 'No', 'None', 'None', 2, 3);
INSERT INTO questions (id, questiontype, questiontext, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)  
VALUES (9, 'Array', 'Can you store multiple arrays inside a single array in C++?', 'Yes', 'No', 'None', 'None', 1, 3);
INSERT INTO questions (id, questiontype, questiontext, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)  
VALUES (10, 'Array', 'Can you pass an array as an argument to a function in C++?', 
'Yes, by passing the array name', 'Yes, by passing the array size and the array name', 
'No, arrays cannot be passed as function arguments', 'No, but you can pass a pointer to the array instead', 4, 3);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(11, 'Pointer', 'What is a pointer in C++?', 'A loop that executes a block of code multiple times', 'A data type that represents a collection of related variables', 
'A function that returns multiple values', 'A variable that stores the address of another variable', 4, 3);
INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(12, 'Pointer', 'How do you declare a pointer in C++?', 'By using the "malloc" function followed by a variable name',
'By using the "&" operator followed by a variable name', 'By using the "new" keyword followed by a variable name','By using the "*" operator followed by a variable name', 4, 3);
INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(13, 'Pointer', 'How do you assign the address of a variable to a pointer in C++?','By using the "*" operator', 
'By using the "&" operator','By using the "new" keyword', 'By using the "malloc" function', 2, 3);
INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(14, 'Pointer', 'How do you access the value of a variable through a pointer in C++?', 'By using the "new" keyword', 'By using the "&" operator',  'By using the "*" operator', 'By using the "malloc" function', 3, 3);
INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(15, 'Pointer', 'You cant perform arithmetic operations on pointers in C++?', 'True', 'False', 'None', 'None', 2, 3);
INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(16, 'Pointer', 'Can you compare pointers in C++?', 'Yes', 'No', 'None', 'None', 1, 3);
INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(17, 'Pointer', 'How do you pass a pointer as an argument to a function in C++?', 'By value', 'By reference', 'By pointer', 'You cannot pass a pointer as an argument to a function in C++', 2, 3);
INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(18, 'Pointer', 'Can you return a pointer from a function in C++?', 'Yes', 'No','None', 'None', 1, 3);
INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(19, 'Pointer', 'How do you define an array of pointers in C++?', 'By using the "malloc" function followed by an array name',
'By using the "&" operator followed by an array name', 'By using the "new" keyword followed by an array name', 'By using the "*" operator followed by an array name', 4, 3);
INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(20, 'Pointer', 'How do you define a dynamic array of pointers in C++?', 'By using the "new" operator followed by an array name',
'By using the "malloc" function followed by an array name', 'By using the "calloc" function followed by an array name', 'You cannot define a dynamic array of pointers in C++', 1, 3);


INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(21, 'Structure', 'What is the syntax for defining a structure in C++?', 'struct { ... }', 'struct name { ... }', 'struct name;', 'struct { name { ... } }', 2, 3);
INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(22, 'Structure', 'How do you access the members of a structure in C++?', 'structure.member', 'structure->member', 'structure[member]', 'structure::member', 4, 3);
INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(23, 'Structure', 'Can you nest structures within one another in C++?', 'Yes', 'No', 'None', 'None', 1, 3);
INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(24, 'Structure', 'How do you pass a structure as an argument to a function in C++?', 'By reference', 'By pointer', 'By value', 'You cannot pass a structure as an argument to a function in C++', 3, 3);
INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(25, 'Structure', 'You cant return a structure from a function in C++', 'True', 'False', 'None', 'None', 2, 3);
INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(26, 'Structure', 'How do you define an array of structures in C++?', 'struct name[size]', 'struct name { ... }[size]', 'struct { name[size] { ... } }', 'struct name { ... } name[size]', 4, 3);
INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(27, 'Structure', 'How do you sort an array of structures based on a particular member in C++?', 'By using the sort() function from the algorithm library', 'By using the qsort() function from the stdlib library', 'By using the bubble sort algorithm', 'You cannot sort an array of structures in C++', 1, 3);
INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(28, 'Structure', 'How do you perform input/output operations on structures in C++?', 'By using the printf and scanf functions', 'By using the getline function', 'You cannot perform input/output operations on structures in C++', 'By using the cout and cin streams', 4, 3);
INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(29, 'Structure', 'Can you use inheritance with structures in C++?', 'Yes', 'No', 'None', 'None', 1, 3);
INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(30, 'Structure', 'How do you define a dynamic structure in C++ using pointers?', 'By using the malloc function', 'By using the new operator', 'By using the calloc function', 'You cannot define a dynamic structure in C++ using pointers', 2, 3);


INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(31, 'Primitive', 'Which of the following is NOT a primitive data type in C++?', 'int', 'float', 'string', 'bool', 3, 1);
INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(32, 'Primitive', 'Which of the following is a primitive data type that can store a single character in C++?', 'int', 'char', 'bool', 'double', 2, 1);
INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(33, 'Primitive', 'What is the default value of an uninitialized bool variable in C++?', 'true', 'false', '0', '1', 2, 1);
INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(34, 'Primitive', 'How do you define an int variable in C++?', 'int variable_name;', 'variable_name int;', 'int = variable_name;', 'variable_name: int;', 1, 1);
INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(35, 'Primitive', 'How do you define a float variable in C++?', 'float variable_name = 0.0;', 'variable_name: float;', 'float: variable_name;', 'variable_name float;', 1, 1);
INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(36, 'Primitive', 'How do you define a char variable in C++?', 'variable_name: char;', 'variable_name char;', 'char: variable_name;', 'char variable_name = A ;', 4, 1);
INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(37, 'Primitive', 'How do you define a bool variable in C++?', 'bool: variable_name;', 'variable_name bool;', 'bool variable_name;', 'variable_name: bool;', 3, 1);
INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(38, 'Primitive', 'Can a char variable in C++ contain more than one character?', 'Yes', 'No', 'None', 'None', 2, 1);
INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(39, 'Primitive', 'Can a float variable in C++ contain an integer value?', 'Yes', 'No', 'None', 'None', 1, 1);
INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points)
VALUES 
(40, 'Primitive', 'Can an int variable in C++ contain a decimal value?', 'Yes', 'No', 'None', 'None', 2, 1);


INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (41, 'input/output', 'How do you output a string to the console in C++?', 
'print("Hello, world!");', 'printf("Hello, world!");', 'cout << "Hello, world!";', 'cout >> "Hello, world!";', 3, 1);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (42, 'input/output', 'How do you output an integer variable to the console in C++?', 
'cout << myInt;', 'printf("%d", myInt);', 'print(myInt);', 'cout >> myInt;', 1, 1);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (43, 'input/output', 'How do you output multiple items to the console in C++?', 
'cout << item1 << item2 << item3;', 'printf("%d %d %d", item1, item2, item3);', 'print(item1, item2, item3);', 'cout >> item1 >> item2 >> item3;', 1, 1);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (44, 'input/output', 'How do you read in an integer from the user in C++?', 
'cin << myInt;', 'scanf("%d", &myInt);', 'cin >> myInt;','read(myInt);', 3, 1);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (45, 'input/output', 'How do you read in a string from the user in C++?', 
'cin << myString;', 'scanf("%s", myString);', 'read(myString);', 'cin >> myString;', 4, 1);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (46, 'input/output', 'How do you read in multiple items from the user in C++?', 
'cin << item1 << item2 << item3;', 'cin >> item1 >> item2 >> item3;', 'scanf("%d %d %d", &item1, &item2, &item3);', 'read(item1, item2, item3);', 2, 1);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (47, 'input/output', 'How do you output a floating point number to the console in C++?', 
'cout << myFloat;', 'printf("%f", myFloat);', 'print(myFloat);', 'cout >> myFloat;', 1, 1);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (48, 'input/output', 'How do you read a floating point number from the user in C++?', 'cin << myFloat;', 
'cin >> myFloat;', 'read(myFloat);', 'scanf("%f,&myFloat);', 2, 1) ;

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (49, 'input/output', 'How do you output a boolean value to the console in C++?', 'cout << myBool;', 
'printf("%d", myBool);', 'print(myBool);', 'cout >> myBool;', 1, 1) ;

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (50, 'input/output', 'How do you read in a boolean value from the user in C++?', 'cin << myBool;', 
'scanf("%d", &myBool);', 'read(myBool);', 'cin >> myBool;', 4, 1) ;


INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (51, 'Loop', 'Which of the following is the correct syntax for a for loop in C++?', 
'for (int i = 0; i < 10; i++) { // code }', 'for i in range(10): // code', 'while (i < 10) { // code }', 'do { // code } while (i < 10);', 1, 1);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (52, 'Loop', 'Which of the following is the correct syntax for a while loop in C++?', 
'for (int i = 0; i < 10; i++) { // code }', 'while (i < 10) { // code }', 'do { // code } while (i < 10);', 'while i < 10: // code', 2, 1);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (53, 'Loop', 'Which of the following is the correct syntax for a do-while loop in C++?', 
'for (int i = 0; i < 10; i++) { // code }', 'while (i < 10) { // code }', 'do { // code } while (i < 10);', 'do-while (i < 10) { // code }', 3, 1);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (54, 'Loop', 'How do you break out of a loop early in C++?', 
 'exit;', 'continue;', 'return;','break;', 4, 1);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (55, 'Loop', 'How do you skip the rest of the current iteration of a loop in C++?', 
'break;', 'continue;', 'return;', 'exit;', 2, 1);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (56, 'Loop', 'How do you define an infinite loop in C++?', 
'for (;;) { // code }', 'while (true) { // code }', 'do { // code } while (true);', 'infinite { // code }', 2, 1);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (57, 'Loop', 'How do you exit an infinite loop in C++?', 
'continue;', 'return;', 'break;', 'exit;', 3, 1);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (58, 'Loop', 'How do you iterate over the elements of an array using a for loop in C++?', 
'for (int element : array) { // code }', 'for (int i = 0; i < array.size(); i++) { // code }', 'for each (int element in array) { // code }',' for i in range(array.size()): // code', 2, 1);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (59, 'Loop', 'How do you iterate over the elements of a string using a for loop in C++?', 
'for (char c : str) { // code }', 'for (int i = 0; i < str.size(); i++) { // code }', 'for each (char c in str) { // code }', 'for i in range(str.size()): // code', 1, 1);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (60, 'Loop', 'How do you define a loop that will execute exactly 5 times in C++?', 'for i in range(5): // code', 
'while (i < 5) { // code }', 'do { // code } while (i < 5);', 'for (int i = 0; i < 5; i++) { // code }', 4, 1);


INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (61, 'LinkedList', 'How do you create a linked list in Java?', 
'List<Integer> list = new LinkedList<>();', 
'LinkedList<Integer> list = new LinkedList<Integer>();', 
'LinkedList<Integer> list = new LinkedList<>();', 
'List<Integer> list = new LinkedList<Integer>();', 3, 5);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (62, 'LinkedList', 'How do you add an element to the end of a linked list in Java?', 
'list.add(element);', 
'list.addLast(element);', 
'list.append(element);', 
'list.push(element);', 1, 5);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (63, 'LinkedList', 'How do you add an element to the beginning of a linked list in Java?', 
'list.add(element);', 
'list.addFirst(element);', 
'list.prepend(element);', 
'list.push(element);', 2, 5);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (64, 'LinkedList', 'How do you remove the first element from a linked list in Java?', 
'list.remove();', 
'list.shift();',
'list.pop();', 
'list.removeFirst();', 4, 5);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (65, 'LinkedList', 'How do you remove the last element from a linked list in Java?', 
'list.remove();', 
'list.removeLast();', 
'list.pop();', 
'list.shift();', 2, 5);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (66, 'LinkedList', 'How do you access the first element of a linked list in Java?', 
'list.getFirst();', 
'list.get(0);', 
'list.peek();', 
'list.first();', 1, 5);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (67, 'LinkedList', 'How do you access the last element of a linked list in Java?', 
'list.get(list.size() - 1);', 
'list.peekLast();', 
'list.getLast();', 
'list.last();', 3, 5);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (68, 'LinkedList', 'How do you check if a linked list is empty in Java?', 
'list.isEmpty();', 
'list.empty();', 
'list.size() == 0;', 
'list.length() == 0;', 1, 5);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (69, 'LinkedList', 'How do you insert an element at a specific position in a linked list in Java?', 
'list.insert(index, element);', 
'list.replace(index, element);',
'list.set(index, element);', 
'list.add(index, element);', 4, 5);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (70, 'LinkedList', 'How do you remove an element at a specific position in a linked list in Java?', 
'list.shift(index);',
'list.delete(index);', 
'list.pop(index);', 
'list.remove(index);', 4, 5);


INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (71, 'BinaryTree', 'How do you create a binary tree in Java?', 
'BinaryTree tree = new BinaryTree();', 
'Tree tree = new BinaryTree();', 
'Node root = new Node();', 
'None of the above', 3, 5);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (72, 'BinaryTree', 'How do you add a left child to a node in a binary tree in Java?', 
'node.addLeftChild(element);', 
'node.left = new Node(element);', 
'node.setLeftChild(element);', 
'node.leftChild = element;', 2, 5);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (73, 'BinaryTree', 'How do you add a right child to a node in a binary tree in Java?', 
'node.addRightChild(element);', 
'node.right = new Node(element);', 
'node.setRightChild(element);', 
'node.rightChild = element;', 2, 5);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (74, 'BinaryTree', 'How do you check if a node in a binary tree has a left child in Java?', 
'node.left != null;',
'node.hasLeftChild();',
'node.getLeftChild() != null;',
'node.leftChild != null;', 1, 5) ;

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (75, 'BinaryTree', 'How do you check if a node in a binary tree has a right child in Java?', 
'node.hasRightChild();', 
'node.getRightChild() != null;', 
'node.rightChild != null;',
'node.right != null;',  4, 5);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (76, 'BinaryTree', 'How do you traverse a binary tree in pre-order in Java?', 
'tree.preOrderTraversal();', 
'tree.traversePreOrder();', 
'tree.preOrderDFS();',
'tree.dfsPreOrder();',  3, 5);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (77, 'BinaryTree', 'How do you traverse a binary tree in in-order in Java?', 
'tree.inOrderDFS();',
'tree.inOrderTraversal();', 
'tree.traverseInOrder();', 
'tree.dfsInOrder();', 1, 5);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (78, 'BinaryTree', 'How do you traverse a binary tree in post-order in Java?', 
'tree.postOrderTraversal();', 
'tree.postOrderDFS();',
'tree.traversePostOrder();', 
'tree.dfsPostOrder();', 2, 5);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (79, 'BinaryTree', 'How do you check if a binary tree is a binary search tree (BST) in Java?', 
'tree.isBST();', 
'tree.isSearchTree();', 
'tree.isSorted();', 
'tree.checkBST();', 1, 5);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (80, 'BinaryTree', 'How do you insert a value into a binary search tree (BST) in Java?', 
'tree.add(value);', 
'tree.put(value);', 
'tree.insert(value);', 
'tree.addValue(value);', 3, 5);


INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (81, 'Stack', 'How do you create a stack in Java?', 
'Stack stack = new Stack();', 
'Queue stack = new Queue();', 
'List stack = new ArrayList();', 
'Deque stack = new LinkedList();', 4, 5);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (82, 'Stack', 'How do you push an element onto a stack in Java?', 
'stack.push(element);', 
'stack.add(element);', 
'stack.put(element);', 
'stack.insert(element);', 1, 5);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (83, 'Stack', 'How do you pop an element off the top of a stack in Java?', 
'stack.remove();', 
'stack.pop();', 
'stack.get();', 
'stack.retrieve();', 2, 5);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (84, 'Stack', 'How do you check the element at the top of a stack in Java?', 
'stack.top();', 
'stack.peek();', 
'stack.front();', 
'stack.head();', 2, 5);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (85, 'Stack', 'How do you check if a stack is empty in Java?', 
'stack.empty();', 
'stack.size() == 0;', 
'stack.isEmpty();', 
'stack.length() == 0;', 3, 5);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (86, 'Stack', 'How do you search for an element in a stack in Java?', 
'stack.search(element);', 
'stack.find(element);', 
'stack.contains(element);', 
'stack.indexOf(element);', 1, 5);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (87, 'Stack', 'How do you get the size of a stack in Java?', 
'stack.length();', 
'stack.capacity();', 
'stack.count();',
'stack.size();',  4, 5);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (88, 'Stack', 'How do you clear the elements of a stack in Java?', 
'stack.removeAll();', 
'stack.clear();', 
'stack.reset();', 
'stack.empty();', 2, 5);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (89, 'Stack', 'How do you iterate through the elements of a stack in Java?', 
'for (Object element : stack) { ... }', 
'for (int i = 0; i < stack.size(); i++) { ... }', 
'stack.iterator().forEachRemaining(element -> { ... });',
'stack.forEach(element -> { ... });',  3, 5);

INSERT INTO questions (id, questiontype, questionText, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, points) 
VALUES (90, 'Stack', 'How do you create a stack using the Stack class in the java.util package in Java?', 
'Stack stack = new Stack();', 
'Queue stack = new Stack();', 
'List stack = new Stack();', 
'Deque stack = new Stack();', 1, 5);

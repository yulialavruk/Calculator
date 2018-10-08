var numbers = document.querySelectorAll('.number'),
	operations = document.querySelectorAll('.operation'),
	decimalBtn = document.getElementById('decimal'),
	clearBtns = document.querySelectorAll('.clear_btn'),
	display = document.getElementById('display'),
	memoryCurrentNumber = 0,
	memoryNewNumber = false,
	memoryPendingOperation = '',
	i;

for (i = 0; i < numbers.length; i += 1) {
	var number = numbers[i];
	number.addEventListener('click', function(e){
		numberPress(e.target.textContent);
	});
};

for(i = 0; i < operations.length; i += 1){
	var operationBtn = operations[i];
	operationBtn.addEventListener('click', function(e){
		operation(e.target.textContent);
	});
};

for(i = 0; i < clearBtns.length; i += 1 ){
	var clearBtn = clearBtns[i];
	clearBtn.addEventListener('click', function(e){
		clear(e.srcElement.id)
	});
};

decimalBtn.addEventListener('click', decimal);

function numberPress(number) {
	if(memoryNewNumber){
		display.value = number;
		memoryNewNumber = false;
	}
	else{
		if(display.value === '0'){
			display.value = number;
		}
		else{
			display.value += number;
		};
	};
};

function operation(op) {
	var localOperationMemory = display.value;


	if(memoryNewNumber && memoryPendingOperation !== '='){
		display.value = memoryCurrentNumber;
	}
	else{
		memoryNewNumber = true;
		if(memoryPendingOperation === '+'){
			memoryCurrentNumber+=parseFloat(localOperationMemory);
		}
		else if(memoryPendingOperation === '-'){
			memoryCurrentNumber-=parseFloat(localOperationMemory);
		}
		else if(memoryPendingOperation === '*'){
			memoryCurrentNumber*=parseFloat(localOperationMemory);
		}
		else if(memoryPendingOperation === '/'){
			memoryCurrentNumber/=parseFloat(localOperationMemory);
		}
		else{
			memoryCurrentNumber = parseFloat(localOperationMemory);
		};

		display.value = memoryCurrentNumber;
		memoryPendingOperation = op;
	};
};

function decimal() {
	var localDecimalMemory = display.value;

	if(memoryNewNumber){
		localDecimalMemory = '0.';
		memoryNewNumber = false;
	}
	else{
		if(localDecimalMemory.indexOf('.') === -1){
			localDecimalMemory += '.';
		};
	};
	display.value = localDecimalMemory;
};

function clear(id) {
	if(id === 'CE'){
		display.value = '0';
		memoryNewNumber = true;
	}
	else if(id === 'C'){
		display.value = '0';
		memoryNewNumber = true;
		memoryCurrentNumber = 0;
		memoryPendingOperation = '';
	}
};



// Custom JavaScript for Mintlify documentation
document.addEventListener('DOMContentLoaded', function() {
  console.log('Credits.js loaded, checking page path...');
  
  // Check if this is the credits page
  const isCreditsPage = window.location.pathname.includes('/credits') || 
                        document.title.includes('Tax Credits') ||
                        document.title.includes('R&D Tax Credits');
  
  console.log('Is credits page:', isCreditsPage);
  console.log('Current path:', window.location.pathname);
  console.log('Document title:', document.title);
  
  if (isCreditsPage) {
    console.log('This is the credits page, adding calculator...');
    
    // Create a container for the entire example section
    const exampleSection = document.createElement('div');
    exampleSection.style.marginTop = '0';
    exampleSection.style.marginBottom = '2rem';
    
    // No header or description
    
    // Define the expense types and their credit rates
    const expenses = [
      { name: 'Employee salaries', rate: 0.10 },
      { name: 'Contractor payments', rate: 0.065 }
    ];
    
    // Create a table for the calculator
    const calculatorTable = document.createElement('table');
    calculatorTable.style.width = '100%';
    calculatorTable.style.borderCollapse = 'collapse';
    calculatorTable.style.marginTop = '0';
    calculatorTable.style.borderSpacing = '0';

    // Create table header
    const tableHeader = document.createElement('thead');
    tableHeader.style.backgroundColor = '#F6F5F2';
    const headerRow = document.createElement('tr');
    headerRow.style.borderBottom = '1px solid #e2e8f0';

    // Create header cells
    const typeHeader = document.createElement('th');
    typeHeader.textContent = 'Type';
    typeHeader.style.textAlign = 'left';
    typeHeader.style.padding = '4px 0 4px 8px'; // Match cell padding
    typeHeader.style.fontWeight = 'normal';
    typeHeader.style.borderBottom = '2px solid #e2e8f0';
    typeHeader.style.borderRight = '1px solid #e2e8f0'; // Add right border
    typeHeader.style.fontSize = '12px'; // Smaller font size

    const usBasedHeader = document.createElement('th');
    usBasedHeader.textContent = 'US';
    usBasedHeader.style.textAlign = 'center';
    usBasedHeader.style.padding = '4px 8px'; // Reduced padding
    usBasedHeader.style.fontWeight = 'normal';
    usBasedHeader.style.borderBottom = '2px solid #e2e8f0';
    usBasedHeader.style.borderRight = '1px solid #e2e8f0'; // Add right border
    usBasedHeader.style.fontSize = '12px'; // Smaller font size

    const amountHeader = document.createElement('th');
    amountHeader.textContent = 'Amount';
    amountHeader.style.textAlign = 'right';
    amountHeader.style.padding = '4px 8px'; // Reduced padding
    amountHeader.style.fontWeight = 'normal';
    amountHeader.style.borderBottom = '2px solid #e2e8f0';
    amountHeader.style.borderRight = '1px solid #e2e8f0'; // Add right border
    amountHeader.style.fontSize = '12px'; // Smaller font size

    const rdPercentHeader = document.createElement('th');
    rdPercentHeader.style.textAlign = 'right';
    rdPercentHeader.style.padding = '4px 8px'; // Reduced padding
    rdPercentHeader.style.fontWeight = 'normal';
    rdPercentHeader.style.borderBottom = '2px solid #e2e8f0';
    rdPercentHeader.style.borderRight = '1px solid #e2e8f0'; // Add right border
    rdPercentHeader.style.fontSize = '12px'; // Smaller font size
    rdPercentHeader.style.position = 'relative';

    // Create span for the text with dotted underline
    const textSpan = document.createElement('span');
    textSpan.textContent = 'R&D %';
    textSpan.style.borderBottom = '1px dotted #718096';
    rdPercentHeader.appendChild(textSpan);

    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.textContent = 'Generally 80-100% for Engineers and 60-80% for Designers and PMs.';
    tooltip.style.visibility = 'hidden';
    tooltip.style.position = 'fixed'; // Changed to fixed to avoid table cutoff
    tooltip.style.backgroundColor = '#f2f2f2';
    tooltip.style.color = '#000000';
    tooltip.style.padding = '8px 12px';
    tooltip.style.borderRadius = '6px';
    tooltip.style.fontSize = '12px';
    tooltip.style.whiteSpace = 'nowrap';
    tooltip.style.zIndex = '1000';
    tooltip.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    document.body.appendChild(tooltip);

    // Add arrow
    const arrow = document.createElement('div');
    arrow.style.position = 'absolute';
    arrow.style.bottom = '-6px';
    arrow.style.left = '50%';
    arrow.style.transform = 'translateX(-50%)';
    arrow.style.width = '0';
    arrow.style.height = '0';
    arrow.style.borderLeft = '6px solid transparent';
    arrow.style.borderRight = '6px solid transparent';
    arrow.style.borderTop = '6px solid #f2f2f2';
    tooltip.appendChild(arrow);

    // Add hover events with proper positioning
    rdPercentHeader.addEventListener('mouseenter', (e) => {
        const rect = textSpan.getBoundingClientRect();
        tooltip.style.visibility = 'visible';
        tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
        tooltip.style.left = (rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2)) + 'px';
    });

    rdPercentHeader.addEventListener('mouseleave', () => {
        tooltip.style.visibility = 'hidden';
    });

    const qualifiedPercentHeader = document.createElement('th');
    qualifiedPercentHeader.textContent = '% Qualified';
    qualifiedPercentHeader.style.textAlign = 'right';
    qualifiedPercentHeader.style.padding = '4px 8px'; // Reduced padding
    qualifiedPercentHeader.style.fontWeight = 'normal';
    qualifiedPercentHeader.style.borderBottom = '2px solid #e2e8f0';
    qualifiedPercentHeader.style.borderRight = '1px solid #e2e8f0'; // Add right border
    qualifiedPercentHeader.style.fontSize = '12px'; // Smaller font size

    const rdExpensesHeader = document.createElement('th');
    rdExpensesHeader.style.textAlign = 'right';
    rdExpensesHeader.style.padding = '4px 8px'; // Reduced padding
    rdExpensesHeader.style.fontWeight = 'normal';
    rdExpensesHeader.style.borderBottom = '2px solid #e2e8f0';
    rdExpensesHeader.style.borderRight = '1px solid #e2e8f0'; // Add right border
    rdExpensesHeader.style.fontSize = '12px'; // Smaller font size
    rdExpensesHeader.style.position = 'relative';

    // Create span for the text with dotted underline
    const rdExpensesTextSpan = document.createElement('span');
    rdExpensesTextSpan.textContent = 'Qualified R&D';
    rdExpensesTextSpan.style.borderBottom = '1px dotted #718096';
    rdExpensesHeader.appendChild(rdExpensesTextSpan);

    // Create tooltip element
    const rdExpensesTooltip = document.createElement('div');
    rdExpensesTooltip.textContent = 'Amount × R&D % × % Qualified.';
    rdExpensesTooltip.style.visibility = 'hidden';
    rdExpensesTooltip.style.position = 'fixed';
    rdExpensesTooltip.style.backgroundColor = '#f2f2f2';
    rdExpensesTooltip.style.color = '#000000';
    rdExpensesTooltip.style.padding = '8px 12px';
    rdExpensesTooltip.style.borderRadius = '6px';
    rdExpensesTooltip.style.fontSize = '12px';
    rdExpensesTooltip.style.whiteSpace = 'nowrap';
    rdExpensesTooltip.style.zIndex = '1000';
    rdExpensesTooltip.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    document.body.appendChild(rdExpensesTooltip);

    // Add arrow
    const rdExpensesArrow = document.createElement('div');
    rdExpensesArrow.style.position = 'absolute';
    rdExpensesArrow.style.bottom = '-6px';
    rdExpensesArrow.style.left = '50%';
    rdExpensesArrow.style.transform = 'translateX(-50%)';
    rdExpensesArrow.style.width = '0';
    rdExpensesArrow.style.height = '0';
    rdExpensesArrow.style.borderLeft = '6px solid transparent';
    rdExpensesArrow.style.borderRight = '6px solid transparent';
    rdExpensesArrow.style.borderTop = '6px solid #f2f2f2';
    rdExpensesTooltip.appendChild(rdExpensesArrow);

    // Add hover events with proper positioning
    rdExpensesHeader.addEventListener('mouseenter', (e) => {
        const rect = rdExpensesTextSpan.getBoundingClientRect();
        rdExpensesTooltip.style.visibility = 'visible';
        rdExpensesTooltip.style.top = (rect.top - rdExpensesTooltip.offsetHeight - 10) + 'px';
        rdExpensesTooltip.style.left = (rect.left + (rect.width / 2) - (rdExpensesTooltip.offsetWidth / 2)) + 'px';
    });

    rdExpensesHeader.addEventListener('mouseleave', () => {
        rdExpensesTooltip.style.visibility = 'hidden';
    });

    const creditPercentHeader = document.createElement('th');
    creditPercentHeader.textContent = '% Credit';
    creditPercentHeader.style.textAlign = 'right';
    creditPercentHeader.style.padding = '4px 8px'; // Reduced padding
    creditPercentHeader.style.fontWeight = 'normal';
    creditPercentHeader.style.borderBottom = '2px solid #e2e8f0';
    creditPercentHeader.style.borderRight = '1px solid #e2e8f0'; // Add right border
    creditPercentHeader.style.fontSize = '12px'; // Smaller font size

    const creditHeader = document.createElement('th');
    creditHeader.textContent = 'Credit';
    creditHeader.style.textAlign = 'right';
    creditHeader.style.padding = '4px 8px'; // Reduced padding
    creditHeader.style.fontWeight = 'normal';
    creditHeader.style.borderBottom = '2px solid #e2e8f0';
    creditHeader.style.borderRight = 'none';
    creditHeader.style.fontSize = '12px'; // Smaller font size

    // Add header cells to header row
    headerRow.appendChild(typeHeader);
    headerRow.appendChild(usBasedHeader);
    headerRow.appendChild(amountHeader);
    headerRow.appendChild(rdPercentHeader);
    headerRow.appendChild(qualifiedPercentHeader);
    headerRow.appendChild(rdExpensesHeader);
    headerRow.appendChild(creditPercentHeader);
    headerRow.appendChild(creditHeader);

    // Add header row to table header
    tableHeader.appendChild(headerRow);

    // Add table header to table
    calculatorTable.appendChild(tableHeader);

    // Create table body
    const tableBody = document.createElement('tbody');
    calculatorTable.appendChild(tableBody);

    // Add table to the example section
    exampleSection.appendChild(calculatorTable);
    

    
    // Function to create a new row
    const createNewRow = function() {
      // Create a new expense object with default values
      const newExpense = { name: 'New expense', rate: 0.10 };
      
      // Create a row with the same structure as the original rows
      const row = document.createElement('tr');
      row.style.borderBottom = '1px solid #e2e8f0';
      row.style.position = 'relative'; // Make sure the row has position:relative for delete icon
      
      // Clone the structure from the first row
      const firstRow = tableBody.querySelector('tr');
      if (firstRow) {
        // Create all the cells with the same structure
        
        // Type cell with dropdown
        const typeCell = document.createElement('td');
        typeCell.style.padding = '4px 0 4px 8px';
        typeCell.style.verticalAlign = 'middle';
        typeCell.style.borderBottom = '1px solid #e2e8f0';
        typeCell.style.backgroundColor = '#EAF1FE';
        typeCell.style.borderRight = '1px solid #e2e8f0';
        
        const typeSelect = document.createElement('select');
        typeSelect.className = 'calculator-input';
        typeSelect.style.width = '100px';
        typeSelect.style.height = '22px';
        typeSelect.style.paddingLeft = '0';
        typeSelect.style.paddingRight = '24px';
        typeSelect.style.textAlign = 'left';
        typeSelect.style.appearance = 'none';
        typeSelect.style.backgroundColor = '#EAF1FE';
        typeSelect.style.border = 'none';
        typeSelect.style.borderRadius = '0';
        typeSelect.style.boxShadow = 'none';
        typeSelect.style.backgroundImage = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'10\' height=\'6\' viewBox=\'0 0 10 6\' fill=\'none\'%3E%3Cpath d=\'M1 1L5 5L9 1\' stroke=\'%23a0aec0\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")';
        typeSelect.style.backgroundRepeat = 'no-repeat';
        typeSelect.style.backgroundPosition = 'right 8px center';
        typeSelect.style.backgroundSize = '10px';
        typeSelect.style.color = '#000000';
        typeSelect.dataset.expenseType = newExpense.name;
        typeSelect.dataset.rate = newExpense.rate;
        
        // Add blank option as default
        const blankOption = document.createElement('option');
        blankOption.value = '';
        blankOption.textContent = '';
        blankOption.selected = true;
        typeSelect.appendChild(blankOption);
        
        // Add options based on expense types
        const options = ['Employee', 'Contractor', 'Hosting Fee', 'Raw Material'];
        options.forEach(option => {
          const optionElement = document.createElement('option');
          optionElement.value = option.toLowerCase().replace(' ', '-');
          optionElement.textContent = option;
          typeSelect.appendChild(optionElement);
        });
        
        typeCell.appendChild(typeSelect);
        row.appendChild(typeCell);
        
        // US-based checkbox cell
        const usBasedCell = document.createElement('td');
        usBasedCell.style.padding = '4px 8px';
        usBasedCell.style.verticalAlign = 'middle';
        usBasedCell.style.textAlign = 'center';
        usBasedCell.style.borderBottom = '1px solid #e2e8f0';
        usBasedCell.style.backgroundColor = '#EAF1FE';
        usBasedCell.style.borderRight = '1px solid #e2e8f0';
        
        const checkboxContainer = document.createElement('div');
        checkboxContainer.style.position = 'relative';
        checkboxContainer.style.display = 'inline-block';
        checkboxContainer.style.width = '14px';
        checkboxContainer.style.height = '14px';
        checkboxContainer.style.cursor = 'pointer';
        checkboxContainer.style.verticalAlign = 'middle';
        
        const usBasedCheckbox = document.createElement('input');
        usBasedCheckbox.type = 'checkbox';
        usBasedCheckbox.className = 'us-based-checkbox';
        usBasedCheckbox.style.position = 'absolute';
        usBasedCheckbox.style.opacity = '0';
        usBasedCheckbox.style.cursor = 'pointer';
        usBasedCheckbox.dataset.expenseType = newExpense.name;
        
        const customCheckbox = document.createElement('span');
        customCheckbox.style.position = 'absolute';
        customCheckbox.style.top = '0';
        customCheckbox.style.left = '0';
        customCheckbox.style.width = '14px';
        customCheckbox.style.height = '14px';
        customCheckbox.style.backgroundColor = 'transparent';
        customCheckbox.style.border = '1px solid #a0aec0';
        customCheckbox.style.borderRadius = '2px';
        customCheckbox.style.transition = 'all 0.2s';
        
        const checkmark = document.createElement('span');
        checkmark.style.position = 'absolute';
        checkmark.style.top = '1px';
        checkmark.style.left = '4px';
        checkmark.style.width = '4px';
        checkmark.style.height = '8px';
        checkmark.style.borderRight = '2px solid white';
        checkmark.style.borderBottom = '2px solid white';
        checkmark.style.transform = 'rotate(45deg)';
        checkmark.style.display = 'none';
        
        // Add change event listener
        usBasedCheckbox.addEventListener('change', function() {
          if (this.checked) {
            customCheckbox.style.backgroundColor = '#4285F4';
            customCheckbox.style.borderColor = '#4285F4';
            checkmark.style.display = 'block';
          } else {
            customCheckbox.style.backgroundColor = 'transparent';
            customCheckbox.style.borderColor = '#a0aec0';
            checkmark.style.display = 'none';
          }
          
          // Update qualified percent
          updateQualifiedPercent();
        });
        
        // Add click event to toggle
        checkboxContainer.addEventListener('click', function() {
          usBasedCheckbox.checked = !usBasedCheckbox.checked;
          
          // Trigger change event
          const event = new Event('change');
          usBasedCheckbox.dispatchEvent(event);
        });
        
        customCheckbox.appendChild(checkmark);
        checkboxContainer.appendChild(usBasedCheckbox);
        checkboxContainer.appendChild(customCheckbox);
        usBasedCell.appendChild(checkboxContainer);
        row.appendChild(usBasedCell);
        
        // Amount input cell
        const amountCell = document.createElement('td');
        amountCell.style.padding = '4px 8px';
        amountCell.style.verticalAlign = 'middle';
        amountCell.style.borderBottom = '1px solid #e2e8f0';
        amountCell.style.backgroundColor = '#EAF1FE';
        amountCell.style.width = '80px';
        amountCell.style.borderRight = '1px solid #e2e8f0';
        
        const amountContainer = document.createElement('div');
        amountContainer.style.position = 'relative';
        
        const dollarSign = document.createElement('span');
        dollarSign.textContent = '$';
        dollarSign.style.position = 'absolute';
        dollarSign.style.left = '0';
        dollarSign.style.top = '50%';
        dollarSign.style.transform = 'translateY(-50%)';
        dollarSign.style.color = '#718096';
        dollarSign.style.fontSize = '12px';
        dollarSign.style.pointerEvents = 'none';
        
        const amountInput = document.createElement('input');
        amountInput.type = 'text';
        amountInput.className = 'calculator-input amount-input';
        amountInput.style.width = '100%';
        amountInput.style.height = '22px';
        amountInput.style.paddingLeft = '10px';
        amountInput.style.textAlign = 'right';
        amountInput.style.appearance = 'none';
        amountInput.style.backgroundColor = '#EAF1FE';
        amountInput.style.border = 'none';
        amountInput.style.borderRadius = '0';
        amountInput.style.boxShadow = 'none';
        amountInput.style.color = '#000000';
        amountInput.placeholder = '0';
        
        // Add input event listener for amount
        amountInput.addEventListener('input', function(e) {
          // Get the input value without commas
          let rawValue = e.target.value.replace(/,/g, '');
          
          // Limit to 6 digits
          if (rawValue.length > 6) {
            rawValue = rawValue.substring(0, 6);
          }
          
          // Store the raw value
          e.target.dataset.rawValue = rawValue || '0';
          
          // If it's a valid number, format it with commas
          if (rawValue && !isNaN(rawValue)) {
            // Remember cursor position
            const cursorPos = e.target.selectionStart;
            const oldLength = e.target.value.length;
            
            // Format with commas
            e.target.value = formatNumber(parseFloat(rawValue));
            
            // Adjust cursor position
            const newLength = e.target.value.length;
            const newPos = cursorPos + (newLength - oldLength);
            e.target.setSelectionRange(newPos, newPos);
          }
          
          // Update calculations
          updateRDExpenses();
          updateCreditPercent();
          updateCredit();
          updateResults();
        });
        
        amountContainer.appendChild(dollarSign);
        amountContainer.appendChild(amountInput);
        amountCell.appendChild(amountContainer);
        row.appendChild(amountCell);
        
        // R&D % input cell
        const rdPercentCell = document.createElement('td');
        rdPercentCell.style.padding = '4px 8px';
        rdPercentCell.style.verticalAlign = 'middle';
        rdPercentCell.style.borderBottom = '1px solid #e2e8f0';
        rdPercentCell.style.backgroundColor = '#EAF1FE';
        rdPercentCell.style.width = '70px';
        rdPercentCell.style.borderRight = '1px solid #e2e8f0';
        
        const rdPercentContainer = document.createElement('div');
        rdPercentContainer.style.position = 'relative';
        
        const rdPercentInput = document.createElement('input');
        rdPercentInput.type = 'number';
        rdPercentInput.min = '0';
        rdPercentInput.max = '100';
        rdPercentInput.step = '1';
        rdPercentInput.className = 'calculator-input percent-input';
        rdPercentInput.style.width = 'calc(100% - 15px)';
        rdPercentInput.style.height = '22px';
        rdPercentInput.style.textAlign = 'right';
        rdPercentInput.style.appearance = 'none';
        rdPercentInput.style.backgroundColor = '#EAF1FE';
        rdPercentInput.style.border = 'none';
        rdPercentInput.style.borderRadius = '0';
        rdPercentInput.style.boxShadow = 'none';
        rdPercentInput.style.color = '#000000';
        rdPercentInput.placeholder = '0';
        
        const rdPercentSignSpan = document.createElement('span');
        rdPercentSignSpan.textContent = '%';
        rdPercentSignSpan.style.position = 'absolute';
        rdPercentSignSpan.style.right = '0';
        rdPercentSignSpan.style.top = '50%';
        rdPercentSignSpan.style.transform = 'translateY(-50%)';
        rdPercentSignSpan.style.color = '#718096';
        rdPercentSignSpan.style.fontSize = '12px';
        rdPercentSignSpan.style.pointerEvents = 'none';
        
        // Add input event listener for R&D %
        rdPercentInput.addEventListener('input', function(e) {
          // Get the current value
          let value = parseInt(e.target.value);
          
          // Ensure it's a number
          if (isNaN(value)) {
            value = 0;
          }
          
          // Enforce min/max range (0-100)
          if (value < 0) {
            value = 0;
          } else if (value > 100) {
            value = 100;
          }
          
          // Update the input value
          e.target.value = value;
          
          updateRDExpenses();
          updateCreditPercent();
          updateCredit();
          updateResults();
        });
        
        rdPercentContainer.appendChild(rdPercentInput);
        rdPercentContainer.appendChild(rdPercentSignSpan);
        rdPercentCell.appendChild(rdPercentContainer);
        row.appendChild(rdPercentCell);
        
        // Qualified % cell (results cell)
        const qualifiedPercentCell = document.createElement('td');
        qualifiedPercentCell.style.padding = '4px 8px';
        qualifiedPercentCell.style.verticalAlign = 'middle';
        qualifiedPercentCell.style.textAlign = 'right';
        qualifiedPercentCell.style.borderBottom = '1px solid #e2e8f0';
        qualifiedPercentCell.style.width = '80px';
        qualifiedPercentCell.style.borderRight = '1px solid #e2e8f0';
        
        const qualifiedPercentContainer = document.createElement('div');
        qualifiedPercentContainer.style.position = 'relative';
        
        const qualifiedPercentSpan = document.createElement('span');
        qualifiedPercentSpan.className = 'qualified-percent-display';
        qualifiedPercentSpan.style.width = '100%';
        qualifiedPercentSpan.style.height = '100%';
        qualifiedPercentSpan.style.display = 'inline-block';
        qualifiedPercentSpan.style.lineHeight = '22px'; // Match input height
        qualifiedPercentSpan.style.textAlign = 'right';
        qualifiedPercentSpan.style.paddingRight = '15px'; // Space for % sign
        qualifiedPercentSpan.style.color = '#000000';
        
        const qualifiedPercentSignSpan = document.createElement('span');
        qualifiedPercentSignSpan.textContent = '%';
        qualifiedPercentSignSpan.style.position = 'absolute';
        qualifiedPercentSignSpan.style.right = '0';
        qualifiedPercentSignSpan.style.top = '50%';
        qualifiedPercentSignSpan.style.transform = 'translateY(-50%)';
        qualifiedPercentSignSpan.style.color = '#000000';
        qualifiedPercentSignSpan.style.fontSize = '12px';
        qualifiedPercentSignSpan.style.display = 'none';
        
        qualifiedPercentContainer.appendChild(qualifiedPercentSpan);
        qualifiedPercentContainer.appendChild(qualifiedPercentSignSpan);
        qualifiedPercentCell.appendChild(qualifiedPercentContainer);
        row.appendChild(qualifiedPercentCell);
        
        // R&D Expenses cell (results cell)
        const rdExpensesCell = document.createElement('td');
        rdExpensesCell.style.padding = '4px 8px';
        rdExpensesCell.style.verticalAlign = 'middle';
        rdExpensesCell.style.textAlign = 'right';
        rdExpensesCell.style.borderBottom = '1px solid #e2e8f0';
        rdExpensesCell.style.width = '90px';
        rdExpensesCell.style.borderRight = '1px solid #e2e8f0';
        
        const rdExpensesContainer = document.createElement('div');
        rdExpensesContainer.style.position = 'relative';
        
        const rdExpensesDollarSignSpan = document.createElement('span');
        rdExpensesDollarSignSpan.textContent = '$';
        rdExpensesDollarSignSpan.style.position = 'absolute';
        rdExpensesDollarSignSpan.style.left = '0';
        rdExpensesDollarSignSpan.style.top = '50%';
        rdExpensesDollarSignSpan.style.transform = 'translateY(-50%)';
        rdExpensesDollarSignSpan.style.color = '#000000';
        rdExpensesDollarSignSpan.style.fontSize = '12px';
        rdExpensesDollarSignSpan.style.pointerEvents = 'none';
        rdExpensesDollarSignSpan.style.display = 'none';
        
        const rdExpensesSpan = document.createElement('span');
        rdExpensesSpan.className = 'rd-expenses-display';
        rdExpensesSpan.textContent = '';
        rdExpensesSpan.style.display = 'inline-block';
        rdExpensesSpan.style.width = '100%';
        rdExpensesSpan.style.paddingLeft = '10px';
        rdExpensesSpan.style.textAlign = 'right';
        
        rdExpensesContainer.appendChild(rdExpensesDollarSignSpan);
        rdExpensesContainer.appendChild(rdExpensesSpan);
        rdExpensesCell.appendChild(rdExpensesContainer);
        row.appendChild(rdExpensesCell);
        
        // Credit % cell (results cell)
        const creditPercentCell = document.createElement('td');
        creditPercentCell.style.padding = '4px 8px';
        creditPercentCell.style.verticalAlign = 'middle';
        creditPercentCell.style.textAlign = 'right';
        creditPercentCell.style.borderBottom = '1px solid #e2e8f0';
        creditPercentCell.style.width = '60px';
        creditPercentCell.style.borderRight = '1px solid #e2e8f0';
        
        const creditPercentContainer = document.createElement('div');
        creditPercentContainer.style.position = 'relative';
        
        const creditPercentSpan = document.createElement('span');
        creditPercentSpan.className = 'credit-percent-display';
        creditPercentSpan.textContent = '';
        creditPercentSpan.style.display = 'inline-block';
        creditPercentSpan.style.width = '100%';
        creditPercentSpan.style.paddingRight = '15px'; // Space for % sign
        creditPercentSpan.style.textAlign = 'right';
        
        const creditPercentSignSpan = document.createElement('span');
        creditPercentSignSpan.textContent = '%';
        creditPercentSignSpan.style.position = 'absolute';
        creditPercentSignSpan.style.right = '0';
        creditPercentSignSpan.style.top = '50%';
        creditPercentSignSpan.style.transform = 'translateY(-50%)';
        creditPercentSignSpan.style.color = '#000000';
        creditPercentSignSpan.style.fontSize = '12px';
        creditPercentSignSpan.style.display = 'none';
        
        creditPercentContainer.appendChild(creditPercentSpan);
        creditPercentContainer.appendChild(creditPercentSignSpan);
        creditPercentCell.appendChild(creditPercentContainer);
        row.appendChild(creditPercentCell);
        
        // Create cell for Credit display
        const creditCell = document.createElement('td');
        creditCell.style.padding = '4px 8px'; // Reduced padding
        creditCell.style.verticalAlign = 'middle';
        creditCell.style.textAlign = 'right';
        creditCell.style.borderBottom = '1px solid #e2e8f0';
        creditCell.style.width = '80px'; // Fixed width for the cell
        
        // Create a container div to maintain fixed width
        const creditContainer = document.createElement('div');
        creditContainer.style.position = 'relative';
        creditContainer.style.width = '60px'; // Changed from 50px to 60px to match Amount
        creditContainer.style.height = '22px';
        creditContainer.style.display = 'inline-block';
        creditContainer.style.float = 'right'; // Align to the right of the cell
        
        // Create the display span for Credit
        const creditSpan = document.createElement('span');
        creditSpan.className = 'credit-display';
        creditSpan.style.width = '100%';
        creditSpan.style.height = '100%';
        creditSpan.style.display = 'inline-block';
        creditSpan.style.lineHeight = '22px'; // Match input height
        creditSpan.style.textAlign = 'right';
        creditSpan.style.paddingRight = '0px'; // Reduce space for $ sign
        creditSpan.style.color = '#2679F3';
        creditSpan.style.fontSize = '12px';
        
        // Add dollar sign with fixed positioning
        const creditDollarSignSpan = document.createElement('span');
        creditDollarSignSpan.className = 'dollar-sign';
        creditDollarSignSpan.textContent = '$';
        creditDollarSignSpan.style.position = 'absolute';
        creditDollarSignSpan.style.left = '0';
        creditDollarSignSpan.style.top = '50%';
        creditDollarSignSpan.style.transform = 'translateY(-50%)';
        creditDollarSignSpan.style.color = '#333333';
        creditDollarSignSpan.style.fontSize = '12px';
        creditDollarSignSpan.style.pointerEvents = 'none';
        creditDollarSignSpan.style.display = 'none';
        
        creditContainer.appendChild(creditDollarSignSpan);
        creditContainer.appendChild(creditSpan);
        creditCell.appendChild(creditContainer);
        row.appendChild(creditCell);
        
        // Create a delete icon outside the table row structure with Vercel Geist-inspired styling
        const deleteIcon = document.createElement('div');
        // Trash/garbage icon using SVG
        deleteIcon.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6H5H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
        deleteIcon.style.cursor = 'pointer';
        deleteIcon.style.color = '#F31260'; // Vercel red color
        deleteIcon.style.backgroundColor = '#FEE7EF'; // Light pink background
        deleteIcon.style.fontSize = '14px';
        deleteIcon.style.width = '24px';
        deleteIcon.style.height = '24px';
        deleteIcon.style.borderRadius = '50%';
        deleteIcon.style.display = 'inline-flex';
        deleteIcon.style.alignItems = 'center';
        deleteIcon.style.justifyContent = 'center';
        deleteIcon.style.transition = 'all 0.2s';
        deleteIcon.style.position = 'absolute';
        deleteIcon.style.right = '-35px'; // Position to the right of the row
        deleteIcon.style.top = '50%';
        deleteIcon.style.transform = 'translateY(-50%)';
        deleteIcon.style.opacity = '0';
        deleteIcon.style.border = '1px solid transparent';
        
        // Add hover effect to the delete icon with Vercel Geist-inspired styling
        deleteIcon.addEventListener('mouseover', function() {
          this.style.backgroundColor = '#FDD5E5'; // Darker pink on hover
          this.style.color = '#E5113C'; // Darker red on hover
          this.style.border = '1px solid #FDA4C4'; // Light border on hover
        });
        
        deleteIcon.addEventListener('mouseout', function() {
          this.style.backgroundColor = '#FEE7EF'; // Back to light pink
          this.style.color = '#F31260'; // Back to normal red
          this.style.border = '1px solid transparent'; // Remove border
        });
        
        // Add click event to remove the row
        deleteIcon.addEventListener('click', function() {
          // Only remove the row if it's not the last one
          const rowCount = tableBody.querySelectorAll('tr').length;
          if (rowCount > 1) {
            row.remove();
            // Update total credits after removing the row
            if (typeof updateTotalCredits === 'function') {
              updateTotalCredits();
            }
          } else {
            // If it's the last row, change the icon style briefly to indicate it can't be deleted
            const originalColor = this.style.color;
            const originalBg = this.style.backgroundColor;
            const originalBorder = this.style.border;
            
            // Visual feedback that deletion is not allowed
            this.style.color = '#999999';
            this.style.backgroundColor = '#f0f0f0';
            this.style.border = '1px solid #cccccc';
            
            // Reset after a short delay
            setTimeout(() => {
              this.style.color = originalColor;
              this.style.backgroundColor = originalBg;
              this.style.border = originalBorder;
            }, 300);
          }
        });
        
        row.appendChild(deleteIcon);
        
        // Add hover effect to the row to show delete icon only if there's more than one row
        row.addEventListener('mouseover', function() {
          // Check if there's more than one row before showing the delete icon
          const rowCount = tableBody.querySelectorAll('tr').length;
          if (rowCount > 1) {
            deleteIcon.style.opacity = '1';
          }
        });
        
        row.addEventListener('mouseout', function() {
          deleteIcon.style.opacity = '0';
        });
        
        // Also check initially and when rows are added/removed
        const updateDeleteIconVisibility = function() {
          // If this is the only row, hide the delete icon regardless of hover
          const rowCount = tableBody.querySelectorAll('tr').length;
          if (rowCount <= 1) {
            deleteIcon.style.opacity = '0';
            deleteIcon.style.pointerEvents = 'none'; // Also disable clicks
          } else {
            deleteIcon.style.pointerEvents = 'auto'; // Re-enable clicks
          }
        };
        
        // Create a MutationObserver to watch for changes in the table
        const observer = new MutationObserver(updateDeleteIconVisibility);
        observer.observe(tableBody, { childList: true });
        
        // Call initially
        setTimeout(updateDeleteIconVisibility, 0);
        
        // Add the new row to the table body
        tableBody.appendChild(row);
        
        // Functions to update the cell values
        const updateQualifiedPercent = function() {
          const typeValue = typeSelect.value;
          
          if (typeValue && usBasedCheckbox.checked) {
            if (typeValue === 'contractor') {
              qualifiedPercentSpan.textContent = '65';
              qualifiedPercentSignSpan.style.display = 'block';
            } else {
              qualifiedPercentSpan.textContent = '100';
              qualifiedPercentSignSpan.style.display = 'block';
            }
          } else {
            qualifiedPercentSpan.textContent = '';
            qualifiedPercentSignSpan.style.display = 'none';
          }
          
          // After updating qualified percent, update the dependent calculations
          updateRDExpenses();
          updateCreditPercent();
          updateCredit();
        };
        
        const updateRDExpenses = function() {
          const amountValue = parseFloat(amountInput.dataset.rawValue || '0');
          const rdPercentValue = parseInt(rdPercentInput.value || '0');
          const qualifiedPercentValue = parseInt(qualifiedPercentSpan.textContent || '0');
          
          if (amountValue > 0 && rdPercentValue > 0 && qualifiedPercentValue > 0) {
            const rdExpenses = amountValue * (rdPercentValue / 100) * (qualifiedPercentValue / 100);
            rdExpensesSpan.textContent = formatNumber(Math.ceil(rdExpenses));
            rdExpensesDollarSignSpan.style.display = 'block';
          } else {
            rdExpensesSpan.textContent = '';
            rdExpensesDollarSignSpan.style.display = 'none';
          }
        };
        
        const updateCreditPercent = function() {
          const typeValue = typeSelect.value;
          const amountValue = parseFloat(amountInput.dataset.rawValue || '0');
          const rdPercentValue = parseInt(rdPercentInput.value || '0');
          
          if (typeValue && usBasedCheckbox.checked && amountValue > 0 && rdPercentValue > 0) {
            creditPercentSpan.textContent = '10';
            creditPercentSignSpan.style.display = 'block';
          } else {
            creditPercentSpan.textContent = '';
            creditPercentSignSpan.style.display = 'none';
          }
        };
        
        const updateCredit = function() {
          const rdExpensesText = rdExpensesSpan.textContent.replace(/,/g, '');
          const rdExpensesValue = parseFloat(rdExpensesText || '0');
          const creditPercentValue = parseInt(creditPercentSpan.textContent || '0');
          
          if (rdExpensesValue > 0 && creditPercentValue > 0) {
            const creditAmount = rdExpensesValue * (creditPercentValue / 100);
            creditSpan.textContent = formatNumber(Math.ceil(creditAmount));
            creditDollarSignSpan.style.display = 'block';
          } else {
            creditSpan.textContent = '';
            creditDollarSignSpan.style.display = 'none';
          }
          
          // Update total credits
          if (typeof updateTotalCredits === 'function') {
            updateTotalCredits();
          }
        };
        
        // Add event listeners
        typeSelect.addEventListener('change', updateQualifiedPercent);
        
        usBasedCheckbox.addEventListener('change', updateQualifiedPercent);
        
        // Initialize calculations
        updateQualifiedPercent();
        
        // After adding the row, update the total credits
        if (typeof updateTotalCredits === 'function') {
          updateTotalCredits();
        }
      }
    };
    

    
    // Create a hidden element to store the total credits value (for use in calculations)
    const totalCreditsValue = document.createElement('span');
    totalCreditsValue.id = 'total-credits-value';
    totalCreditsValue.style.display = 'none';
    totalCreditsValue.textContent = '$0';
    

    
    // Add the + button to the table's tfoot section to ensure it appears directly beneath the table
    const tableFoot = document.createElement('tfoot');
    const footerRow = document.createElement('tr');
    const footerCell = document.createElement('td');
    footerCell.colSpan = 8; // Span all columns
    footerCell.style.padding = '5px 8px';
    footerCell.style.borderTop = 'none';
    footerCell.style.borderBottom = 'none';
    footerCell.style.borderLeft = 'none';
    footerCell.style.borderRight = 'none';
    footerCell.style.backgroundColor = 'transparent';
    
    // Create the + button
    const addRowButton = document.createElement('button');
    addRowButton.style.position = 'relative';
    addRowButton.style.backgroundColor = '#f0f4fc';
    addRowButton.style.border = '1px solid #e2e8f0';
    addRowButton.style.borderRadius = '12px';
    addRowButton.style.width = '22px';
    addRowButton.style.height = '22px';
    addRowButton.style.padding = '0';
    addRowButton.style.margin = '0';
    addRowButton.style.cursor = 'pointer';
    addRowButton.style.transition = 'all 0.2s';
    addRowButton.style.outline = 'none';
    addRowButton.style.color = '#4285F4';
    addRowButton.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
    addRowButton.style.opacity = '0'; // Hide button by default
    
    // Create a span for the plus symbol with absolute positioning
    const plusSymbol = document.createElement('span');
    plusSymbol.textContent = '+';
    plusSymbol.style.position = 'absolute';
    plusSymbol.style.top = '50%';
    plusSymbol.style.left = '50%';
    plusSymbol.style.transform = 'translate(-50%, -50%)';
    plusSymbol.style.fontSize = '16px';
    plusSymbol.style.fontWeight = 'bold';
    plusSymbol.style.lineHeight = '1';
    plusSymbol.style.display = 'block';
    plusSymbol.style.marginTop = '-1px'; // Fine-tune vertical positioning
    
    // Add the plus symbol to the button
    addRowButton.appendChild(plusSymbol);
    
    // Add hover effect
    addRowButton.addEventListener('mouseover', function() {
      addRowButton.style.backgroundColor = '#e6eeff';
      addRowButton.style.transform = 'scale(1.05)';
    });
    
    addRowButton.addEventListener('mouseout', function() {
      addRowButton.style.backgroundColor = '#f0f4fc';
      addRowButton.style.transform = 'scale(1)';
    });
    
    // Add table hover effect to show/hide the button
    calculatorTable.addEventListener('mouseenter', function() {
      addRowButton.style.opacity = '1';
    });
    
    calculatorTable.addEventListener('mouseleave', function() {
      addRowButton.style.opacity = '0';
    });
    
    // Add click event to the Add Row button
    addRowButton.addEventListener('click', createNewRow);
    
    // Add keyboard accessibility
    addRowButton.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        createNewRow();
      }
    });
    addRowButton.setAttribute('tabindex', '0');
    addRowButton.setAttribute('role', 'button');
    addRowButton.setAttribute('aria-label', 'Add new expense row');
    
    footerCell.appendChild(addRowButton);
    footerRow.appendChild(footerCell);
    tableFoot.appendChild(footerRow);
    calculatorTable.appendChild(tableFoot);
    
    // Add the hidden total credits value element
    exampleSection.appendChild(totalCreditsValue);
    
    // Create a container for the questions to be side by side
    const questionsContainer = document.createElement('div');
    questionsContainer.style.display = 'flex';
    questionsContainer.style.marginTop = '10px';
    questionsContainer.style.marginBottom = '20px';
    
    // Create incorporation year radio buttons
    const incorporationYearText = document.createElement('div');
    incorporationYearText.style.marginRight = '40px';
    
    const incorporationYearLabel = document.createElement('div');
    incorporationYearLabel.textContent = 'Incorporation';
    incorporationYearLabel.style.fontWeight = 'bold';
    incorporationYearLabel.style.fontSize = '14px';
    incorporationYearLabel.style.marginBottom = '8px';
    incorporationYearLabel.style.paddingLeft = '10px';
    incorporationYearText.appendChild(incorporationYearLabel);
    
    // Calculate the threshold year (5 years ago) - dynamically
    const currentYear = new Date().getFullYear();
    const thresholdYear = currentYear - 5;
    
    // Create options container with indentation
    const incorporationOptionsContainer = document.createElement('div');
    incorporationOptionsContainer.style.marginLeft = '20px';
    incorporationYearText.appendChild(incorporationOptionsContainer);
    
    // First option container
    const incorporationAfterContainer = document.createElement('div');
    incorporationAfterContainer.style.marginBottom = '5px';
    incorporationAfterContainer.style.display = 'flex';
    incorporationAfterContainer.style.alignItems = 'center';
    
    // Create radio button group - swapped order
    const incorporationAfterRadio = document.createElement('input');
    incorporationAfterRadio.type = 'radio';
    incorporationAfterRadio.id = 'incorporation-after';
    incorporationAfterRadio.name = 'incorporation';
    incorporationAfterRadio.value = 'after';
    incorporationAfterRadio.style.marginRight = '5px';
    
    const incorporationAfterLabel = document.createElement('label');
    incorporationAfterLabel.htmlFor = 'incorporation-after';
    incorporationAfterLabel.textContent = `${thresholdYear} or After`;
    incorporationAfterLabel.style.fontSize = '14px';
    
    incorporationAfterContainer.appendChild(incorporationAfterRadio);
    incorporationAfterContainer.appendChild(incorporationAfterLabel);
    
    // Second option container
    const incorporationBeforeContainer = document.createElement('div');
    incorporationBeforeContainer.style.display = 'flex';
    incorporationBeforeContainer.style.alignItems = 'center';
    
    const incorporationBeforeRadio = document.createElement('input');
    incorporationBeforeRadio.type = 'radio';
    incorporationBeforeRadio.id = 'incorporation-before';
    incorporationBeforeRadio.name = 'incorporation';
    incorporationBeforeRadio.value = 'before';
    // No default selection
    incorporationBeforeRadio.style.marginRight = '5px';
    
    const incorporationBeforeLabel = document.createElement('label');
    incorporationBeforeLabel.htmlFor = 'incorporation-before';
    incorporationBeforeLabel.textContent = `Before ${thresholdYear}`;
    incorporationBeforeLabel.style.fontSize = '14px';
    
    incorporationBeforeContainer.appendChild(incorporationBeforeRadio);
    incorporationBeforeContainer.appendChild(incorporationBeforeLabel);
    
    // Add options to the container
    incorporationOptionsContainer.appendChild(incorporationAfterContainer);
    incorporationOptionsContainer.appendChild(incorporationBeforeContainer);
    
    // Create revenue radio buttons
    const revenueText = document.createElement('div');
    
    const revenueLabel = document.createElement('div');
    revenueLabel.textContent = 'Revenue';
    revenueLabel.style.fontWeight = 'bold';
    revenueLabel.style.fontSize = '14px';
    revenueLabel.style.marginBottom = '8px';
    revenueLabel.style.paddingLeft = '10px';
    revenueText.appendChild(revenueLabel);
    
    // Create options container with indentation
    const revenueOptionsContainer = document.createElement('div');
    revenueOptionsContainer.style.marginLeft = '20px';
    revenueText.appendChild(revenueOptionsContainer);
    
    // First option container
    const revenueLowContainer = document.createElement('div');
    revenueLowContainer.style.marginBottom = '5px';
    revenueLowContainer.style.display = 'flex';
    revenueLowContainer.style.alignItems = 'center';
    
    // Create radio button group
    const revenueLowRadio = document.createElement('input');
    revenueLowRadio.type = 'radio';
    revenueLowRadio.id = 'revenue-low';
    revenueLowRadio.name = 'revenue';
    revenueLowRadio.value = 'low';
    // No default selection
    revenueLowRadio.style.marginRight = '5px';
    
    const revenueLowLabel = document.createElement('label');
    revenueLowLabel.htmlFor = 'revenue-low';
    revenueLowLabel.textContent = '≤ $5M';
    revenueLowLabel.style.fontSize = '14px';
    
    revenueLowContainer.appendChild(revenueLowRadio);
    revenueLowContainer.appendChild(revenueLowLabel);
    
    // Second option container
    const revenueHighContainer = document.createElement('div');
    revenueHighContainer.style.display = 'flex';
    revenueHighContainer.style.alignItems = 'center';
    
    const revenueHighRadio = document.createElement('input');
    revenueHighRadio.type = 'radio';
    revenueHighRadio.id = 'revenue-high';
    revenueHighRadio.name = 'revenue';
    revenueHighRadio.value = 'high';
    revenueHighRadio.style.marginRight = '5px';
    
    const revenueHighLabel = document.createElement('label');
    revenueHighLabel.htmlFor = 'revenue-high';
    revenueHighLabel.textContent = '> $5M';
    revenueHighLabel.style.fontSize = '14px';
    
    revenueHighContainer.appendChild(revenueHighRadio);
    revenueHighContainer.appendChild(revenueHighLabel);
    
    // Add options to the container
    revenueOptionsContainer.appendChild(revenueLowContainer);
    revenueOptionsContainer.appendChild(revenueHighContainer);
    
    // Add the questions to the container
    questionsContainer.appendChild(incorporationYearText);
    questionsContainer.appendChild(revenueText);
    
    // Add the questions container after the total credits
    exampleSection.appendChild(questionsContainer);
    
    // Create a container for the tax credit eligibility message
    const eligibilityMessageContainer = document.createElement('div');
    eligibilityMessageContainer.style.margin = '16px 0';
    eligibilityMessageContainer.style.padding = '16px 20px';
    eligibilityMessageContainer.style.overflow = 'hidden';
    eligibilityMessageContainer.style.borderRadius = '16px';
    eligibilityMessageContainer.style.display = 'flex';
    eligibilityMessageContainer.style.gap = '12px';
    eligibilityMessageContainer.style.border = '1px solid rgba(38, 121, 243, 0.2)';
    eligibilityMessageContainer.style.backgroundColor = '#EAF1FE';
    eligibilityMessageContainer.style.fontSize = '14px';
    
    // Create the icon container
    const iconContainer = document.createElement('div');
    iconContainer.style.marginTop = '2px';
    iconContainer.style.width = '16px';
    
    // Create SVG icon for bank note
    const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgIcon.setAttribute('width', '16');
    svgIcon.setAttribute('height', '16');
    svgIcon.setAttribute('viewBox', '0 0 24 24');
    svgIcon.setAttribute('fill', 'none');
    svgIcon.setAttribute('stroke', 'currentColor');
    svgIcon.setAttribute('stroke-width', '2');
    svgIcon.setAttribute('stroke-linecap', 'round');
    svgIcon.setAttribute('stroke-linejoin', 'round');
    svgIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgIcon.style.color = '#2679F3';
    svgIcon.style.width = '16px';
    svgIcon.style.height = 'auto';
    
    // Create bank note icon paths
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', '2');
    rect.setAttribute('y', '6');
    rect.setAttribute('width', '20');
    rect.setAttribute('height', '12');
    rect.setAttribute('rx', '2');
    
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '12');
    circle.setAttribute('cy', '12');
    circle.setAttribute('r', '2');
    
    const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line1.setAttribute('x1', '6');
    line1.setAttribute('y1', '12');
    line1.setAttribute('x2', '6');
    line1.setAttribute('y2', '12');
    
    const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line2.setAttribute('x1', '18');
    line2.setAttribute('y1', '12');
    line2.setAttribute('x2', '18');
    line2.setAttribute('y2', '12');
    
    svgIcon.appendChild(rect);
    svgIcon.appendChild(circle);
    svgIcon.appendChild(line1);
    svgIcon.appendChild(line2);
    iconContainer.appendChild(svgIcon);
    
    // Create the content container
    const contentContainer = document.createElement('div');
    contentContainer.style.minWidth = '0';
    contentContainer.style.width = '100%';
    contentContainer.style.color = '#2679F3';
    
    // Create two separate lines for the eligibility message
    const eligibilityMessageLine1 = document.createElement('div');
    eligibilityMessageLine1.id = 'eligibility-message-line1';
    eligibilityMessageLine1.style.fontWeight = 'normal';
    eligibilityMessageLine1.style.marginBottom = '4px';
    
    const eligibilityMessageLine2 = document.createElement('div');
    eligibilityMessageLine2.id = 'eligibility-message-line2';
    eligibilityMessageLine2.style.fontWeight = 'normal';
    
    contentContainer.appendChild(eligibilityMessageLine1);
    contentContainer.appendChild(eligibilityMessageLine2);
    
    eligibilityMessageContainer.appendChild(iconContainer);
    eligibilityMessageContainer.appendChild(contentContainer);
    exampleSection.appendChild(eligibilityMessageContainer);
    
    // No need to add the button container separately since it's now part of the table
    
    // Function to format number with thousand separators
    const formatNumber = function(number) {
      return new Intl.NumberFormat('en-US').format(number);
    };
    
    // We'll append the button row after creating the data rows
    
    // Create rows for each expense type
    expenses.forEach(expense => {
      // Create a table row
      const row = document.createElement('tr');
      row.style.borderBottom = '1px solid #e2e8f0';
      row.style.position = 'relative'; // Make sure the row has position:relative for delete icon
      
      // Create cell for Type dropdown
      const typeCell = document.createElement('td');
      typeCell.style.padding = '4px 0 4px 8px'; // Remove right padding
      typeCell.style.verticalAlign = 'middle';
      typeCell.style.borderBottom = '1px solid #e2e8f0';
      typeCell.style.backgroundColor = '#EAF1FE'; // Light blue background for input cell
      typeCell.style.borderRight = '1px solid #e2e8f0'; // Add right border
      
      // Create the dropdown for Type
      const typeSelect = document.createElement('select');
      typeSelect.className = 'calculator-input';
      typeSelect.style.width = '100px';
      typeSelect.style.height = '22px'; // Reduced height
      typeSelect.style.paddingLeft = '0'; // Remove left padding
      typeSelect.style.paddingRight = '24px';
      typeSelect.style.textAlign = 'left';
      typeSelect.style.appearance = 'none';
      typeSelect.style.backgroundColor = '#EAF1FE'; // Match cell background
      typeSelect.style.border = 'none'; // Remove border
      typeSelect.style.borderRadius = '0';
      typeSelect.style.boxShadow = 'none'; // Remove shadow
      typeSelect.style.backgroundImage = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'10\' height=\'6\' viewBox=\'0 0 10 6\' fill=\'none\'%3E%3Cpath d=\'M1 1L5 5L9 1\' stroke=\'%23a0aec0\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")';
      typeSelect.style.backgroundRepeat = 'no-repeat';
      typeSelect.style.backgroundPosition = 'right 8px center';
      typeSelect.style.backgroundSize = '10px';
      typeSelect.style.color = '#000000'; // Black color for text
      typeSelect.dataset.expenseType = expense.name;
      typeSelect.dataset.rate = expense.rate;
      
      // Add blank option as default
      const blankOption = document.createElement('option');
      blankOption.value = '';
      blankOption.textContent = '';
      blankOption.selected = true;
      typeSelect.appendChild(blankOption);
      
      // Add options based on expense types
      const options = ['Employee', 'Contractor', 'Hosting Fee', 'Raw Material'];
      options.forEach((option, index) => {
        const optionElement = document.createElement('option');
        optionElement.value = option.toLowerCase().replace(' ', '-');
        optionElement.textContent = option;
        typeSelect.appendChild(optionElement);
      });
      
      typeCell.appendChild(typeSelect);
      row.appendChild(typeCell);
      
      // Create cell for US-Based checkbox
      const usBasedCell = document.createElement('td');
      usBasedCell.style.padding = '4px 8px'; // Reduced padding
      usBasedCell.style.verticalAlign = 'middle';
      usBasedCell.style.textAlign = 'center';
      usBasedCell.style.borderBottom = '1px solid #e2e8f0';
      usBasedCell.style.backgroundColor = '#EAF1FE'; // Light blue background for input cell
      usBasedCell.style.borderRight = '1px solid #e2e8f0'; // Add right border
      
      // Create a custom checkbox container
      const checkboxContainer = document.createElement('div');
      checkboxContainer.style.position = 'relative';
      checkboxContainer.style.display = 'inline-block';
      checkboxContainer.style.width = '14px';
      checkboxContainer.style.height = '14px';
      checkboxContainer.style.cursor = 'pointer';
      checkboxContainer.style.verticalAlign = 'middle';
      
      // Create the actual checkbox input (hidden)
      const usBasedCheckbox = document.createElement('input');
      usBasedCheckbox.type = 'checkbox';
      usBasedCheckbox.className = 'us-based-checkbox';
      usBasedCheckbox.style.position = 'absolute';
      usBasedCheckbox.style.opacity = '0'; // Hide the actual checkbox
      usBasedCheckbox.style.cursor = 'pointer';
      usBasedCheckbox.dataset.expenseType = expense.name;
      
      // Create the custom checkbox visual
      const customCheckbox = document.createElement('span');
      customCheckbox.style.position = 'absolute';
      customCheckbox.style.top = '0';
      customCheckbox.style.left = '0';
      customCheckbox.style.width = '14px';
      customCheckbox.style.height = '14px';
      customCheckbox.style.backgroundColor = 'transparent';
      customCheckbox.style.border = '1px solid #a0aec0'; // Border color when unchecked
      customCheckbox.style.borderRadius = '2px';
      customCheckbox.style.transition = 'all 0.2s';
      
      // Create the checkmark
      const checkmark = document.createElement('span');
      checkmark.style.position = 'absolute';
      checkmark.style.top = '1px';
      checkmark.style.left = '4px';
      checkmark.style.width = '4px';
      checkmark.style.height = '8px';
      checkmark.style.borderRight = '2px solid white';
      checkmark.style.borderBottom = '2px solid white';
      checkmark.style.transform = 'rotate(45deg)';
      checkmark.style.display = 'none'; // Hide initially
      
      // Add event listener to update custom checkbox when real checkbox changes
      usBasedCheckbox.addEventListener('change', function() {
        if (this.checked) {
          customCheckbox.style.backgroundColor = '#4285F4';
          customCheckbox.style.borderColor = '#4285F4';
          checkmark.style.display = 'block';
        } else {
          customCheckbox.style.backgroundColor = 'transparent';
          customCheckbox.style.borderColor = '#a0aec0';
          checkmark.style.display = 'none';
        }
      });
      
      // Add click event to the container to toggle the checkbox
      checkboxContainer.addEventListener('click', function() {
        usBasedCheckbox.checked = !usBasedCheckbox.checked;
        
        // Trigger the change event
        const event = new Event('change');
        usBasedCheckbox.dispatchEvent(event);
      });
      
      // Assemble the custom checkbox
      customCheckbox.appendChild(checkmark);
      checkboxContainer.appendChild(usBasedCheckbox);
      checkboxContainer.appendChild(customCheckbox);
      usBasedCell.appendChild(checkboxContainer);
      row.appendChild(usBasedCell);
      
      // Create cell for Amount input
      const amountCell = document.createElement('td');
      amountCell.style.padding = '4px 8px'; // Reduced padding
      amountCell.style.verticalAlign = 'middle';
      amountCell.style.position = 'relative';
      amountCell.style.textAlign = 'right';
      amountCell.style.borderBottom = '1px solid #e2e8f0';
      amountCell.style.width = '80px'; // Fixed width for the cell
      amountCell.style.backgroundColor = '#EAF1FE'; // Light blue background for input cell
      amountCell.style.borderRight = '1px solid #e2e8f0'; // Add right border
      
      // Create a container div to maintain fixed width
      const amountInputContainer = document.createElement('div');
      amountInputContainer.style.position = 'relative';
      amountInputContainer.style.height = '22px';
      amountInputContainer.style.display = 'inline-block';
      amountInputContainer.style.float = 'right'; // Align to the right of the cell
      
      // Create the input field for Amount
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'calculator-input amount-input';
      input.style.width = '100%';
      input.style.height = '22px';
      input.style.paddingLeft = '10px';
      input.style.textAlign = 'right';
      input.style.appearance = 'none';
      input.style.backgroundColor = '#EAF1FE';
      input.style.border = 'none';
      input.style.borderRadius = '0';
      input.style.boxShadow = 'none';
      input.style.color = '#000000';
      input.dataset.expenseType = expense.name;
      input.dataset.rate = expense.rate;
      input.dataset.rawValue = '0'; // Store raw numeric value
      input.placeholder = '0'; // Add placeholder to show 0 by default
      
      // Add dollar sign with fixed positioning
      const dollarSignSpan = document.createElement('span');
      dollarSignSpan.textContent = '$';
      dollarSignSpan.style.position = 'absolute';
      dollarSignSpan.style.left = '0px'; // Adjusted for container
      dollarSignSpan.style.top = '50%'; // Center vertically
      dollarSignSpan.style.transform = 'translateY(-50%)'; // Perfect centering
      dollarSignSpan.style.color = '#718096';
      dollarSignSpan.style.fontSize = '12px';
      dollarSignSpan.style.pointerEvents = 'none';
      
      amountInputContainer.appendChild(input);
      amountInputContainer.appendChild(dollarSignSpan);
      amountCell.appendChild(amountInputContainer);
      row.appendChild(amountCell);
      
      // Create cell for R&D % input
      const rdPercentCell = document.createElement('td');
      rdPercentCell.style.padding = '4px 8px';
      rdPercentCell.style.verticalAlign = 'middle';
      rdPercentCell.style.borderBottom = '1px solid #e2e8f0';
      rdPercentCell.style.backgroundColor = '#EAF1FE';
      rdPercentCell.style.width = '70px';
      rdPercentCell.style.borderRight = '1px solid #e2e8f0';
      
      // Create a container div to maintain fixed width
      const rdInputContainer = document.createElement('div');
      rdInputContainer.style.position = 'relative';
      rdInputContainer.style.width = '45px';
      rdInputContainer.style.height = '22px';
      rdInputContainer.style.display = 'inline-block';
      rdInputContainer.style.float = 'right'; // Align to the right of the cell
      
      // Create the input field for R&D %
      const rdPercentInput = document.createElement('input');
      rdPercentInput.type = 'number';
      rdPercentInput.min = '0';
      rdPercentInput.max = '100';
      rdPercentInput.step = '1';
      rdPercentInput.className = 'calculator-input percent-input';
      rdPercentInput.style.width = 'calc(100% - 15px)';
      rdPercentInput.style.height = '22px';
      rdPercentInput.style.textAlign = 'right';
      rdPercentInput.style.appearance = 'none';
      rdPercentInput.style.backgroundColor = '#EAF1FE';
      rdPercentInput.style.border = 'none';
      rdPercentInput.style.borderRadius = '0';
      rdPercentInput.style.boxShadow = 'none';
      rdPercentInput.style.color = '#000000';
      rdPercentInput.dataset.expenseType = expense.name;
      rdPercentInput.placeholder = '0'; // Add placeholder to show 0 by default
      
      // Add percent sign with fixed positioning
      const percentSignSpan = document.createElement('span');
      percentSignSpan.textContent = '%';
      percentSignSpan.style.position = 'absolute';
      percentSignSpan.style.right = '0px'; // Match header padding
      percentSignSpan.style.top = '50%'; // Center vertically
      percentSignSpan.style.transform = 'translateY(-50%)'; // Perfect centering
      percentSignSpan.style.color = '#718096';
      percentSignSpan.style.fontSize = '12px';
      percentSignSpan.style.pointerEvents = 'none';
      
      // Add event listener for R&D percent input
      rdPercentInput.addEventListener('input', function(e) {
        // Get the current value
        let value = parseInt(e.target.value);
        
        // Ensure it's a number
        if (isNaN(value)) {
          value = 0;
        }
        
        // Enforce min/max range (0-100)
        if (value < 0) {
          value = 0;
        } else if (value > 100) {
          value = 100;
        }
        
        // Update the input value
        e.target.value = value;
        
        // Update calculations
        updateResults();
      });
      
      rdInputContainer.appendChild(rdPercentInput);
      rdInputContainer.appendChild(percentSignSpan);
      rdPercentCell.appendChild(rdInputContainer);
      row.appendChild(rdPercentCell);
      
      // Create cell for % Qualified display
      const qualifiedPercentCell = document.createElement('td');
      qualifiedPercentCell.style.padding = '4px 8px'; // Reduced padding
      qualifiedPercentCell.style.verticalAlign = 'middle';
      qualifiedPercentCell.style.textAlign = 'right';
      qualifiedPercentCell.style.borderBottom = '1px solid #e2e8f0';
      qualifiedPercentCell.style.width = '80px'; // Fixed width for the cell
      qualifiedPercentCell.style.borderRight = '1px solid #e2e8f0'; // Add right border
      
      // Create a container div to maintain fixed width
      const qualifiedPercentContainer = document.createElement('div');
      qualifiedPercentContainer.style.position = 'relative';
      qualifiedPercentContainer.style.width = '70px';
      qualifiedPercentContainer.style.height = '22px';
      qualifiedPercentContainer.style.display = 'inline-block';
      qualifiedPercentContainer.style.float = 'right'; // Align to the right of the cell
      
      // Create the display span for % Qualified
      const qualifiedPercentSpan = document.createElement('span');
      qualifiedPercentSpan.className = 'qualified-percent-display';
      qualifiedPercentSpan.style.width = '100%';
      qualifiedPercentSpan.style.height = '100%';
      qualifiedPercentSpan.style.display = 'inline-block';
      qualifiedPercentSpan.style.lineHeight = '22px'; // Match input height
      qualifiedPercentSpan.style.textAlign = 'right';
      qualifiedPercentSpan.style.paddingRight = '15px'; // Space for % sign
      qualifiedPercentSpan.style.color = '#000000';
      
      // Add percent sign with fixed positioning
      const qualifiedPercentSignSpan = document.createElement('span');
      qualifiedPercentSignSpan.textContent = '%';
      qualifiedPercentSignSpan.style.position = 'absolute';
      qualifiedPercentSignSpan.style.right = '0px';
      qualifiedPercentSignSpan.style.top = '50%';
      qualifiedPercentSignSpan.style.transform = 'translateY(-50%)';
      qualifiedPercentSignSpan.style.fontSize = '12px';
      qualifiedPercentSignSpan.style.pointerEvents = 'none';
      qualifiedPercentSignSpan.style.display = 'none'; // Hide initially
      qualifiedPercentSignSpan.style.color = '#000000';
      
      qualifiedPercentContainer.appendChild(qualifiedPercentSpan);
      qualifiedPercentContainer.appendChild(qualifiedPercentSignSpan);
      qualifiedPercentCell.appendChild(qualifiedPercentContainer);
      row.appendChild(qualifiedPercentCell);
      
      // Create cell for Qualified R&D display
      const rdExpensesCell = document.createElement('td');
      rdExpensesCell.style.padding = '4px 8px'; // Reduced padding
      rdExpensesCell.style.verticalAlign = 'middle';
      rdExpensesCell.style.textAlign = 'right';
      rdExpensesCell.style.borderBottom = '1px solid #e2e8f0';
      rdExpensesCell.style.width = '90px'; // Fixed width for the cell
      rdExpensesCell.style.borderRight = '1px solid #e2e8f0'; // Add right border
      
      // Create a container div to maintain fixed width
      const rdExpensesContainer = document.createElement('div');
      rdExpensesContainer.style.position = 'relative';
      rdExpensesContainer.style.width = '80px';
      rdExpensesContainer.style.height = '22px';
      rdExpensesContainer.style.display = 'inline-block';
      rdExpensesContainer.style.float = 'right'; // Align to the right of the cell
      
      // Create the display span for Qualified R&D
      const rdExpensesSpan = document.createElement('span');
      rdExpensesSpan.className = 'rd-expenses-display';
      rdExpensesSpan.style.width = '100%';
      rdExpensesSpan.style.height = '100%';
      rdExpensesSpan.style.display = 'inline-block';
      rdExpensesSpan.style.lineHeight = '22px'; // Match input height
      rdExpensesSpan.style.textAlign = 'right';
      rdExpensesSpan.style.paddingRight = '0px'; // Reduce space for $ sign
      
      // Add dollar sign with fixed positioning
      const rdExpensesDollarSignSpan = document.createElement('span');
      rdExpensesDollarSignSpan.textContent = '$';
      rdExpensesDollarSignSpan.style.position = 'absolute';
      rdExpensesDollarSignSpan.style.left = '0px';
      rdExpensesDollarSignSpan.style.top = '50%';
      rdExpensesDollarSignSpan.style.transform = 'translateY(-50%)';
      rdExpensesDollarSignSpan.style.color = '#000000';
      rdExpensesDollarSignSpan.style.fontSize = '12px';
      rdExpensesDollarSignSpan.style.pointerEvents = 'none';
      rdExpensesDollarSignSpan.style.display = 'none'; // Hide initially
      
      rdExpensesContainer.appendChild(rdExpensesSpan);
      rdExpensesContainer.appendChild(rdExpensesDollarSignSpan);
      rdExpensesCell.appendChild(rdExpensesContainer);
      row.appendChild(rdExpensesCell);
      
      // Create cell for Credit % display
      const creditPercentCell = document.createElement('td');
      creditPercentCell.style.padding = '4px 8px'; // Reduced padding
      creditPercentCell.style.verticalAlign = 'middle';
      creditPercentCell.style.textAlign = 'right';
      creditPercentCell.style.borderBottom = '1px solid #e2e8f0';
      creditPercentCell.style.width = '60px'; // Same width as header
      creditPercentCell.style.borderRight = '1px solid #e2e8f0'; // Add right border
      
      // Create a container div to maintain fixed width
      const creditPercentContainer = document.createElement('div');
      creditPercentContainer.style.position = 'relative';
      creditPercentContainer.style.width = '50px'; // Reduce to match cell width (60px minus padding)
      creditPercentContainer.style.height = '22px';
      creditPercentContainer.style.display = 'inline-block';
      creditPercentContainer.style.float = 'right'; // Align to the right of the cell
      
      // Create the display span for Credit %
      const creditPercentSpan = document.createElement('span');
      creditPercentSpan.className = 'credit-percent-display';
      creditPercentSpan.style.width = '100%';
      creditPercentSpan.style.height = '100%';
      creditPercentSpan.style.display = 'inline-block';
      creditPercentSpan.style.lineHeight = '22px'; // Match input height
      creditPercentSpan.style.textAlign = 'right';
      creditPercentSpan.style.paddingRight = '15px'; // Space for % sign
      creditPercentSpan.style.color = '#000000';
      
      // Add percent sign with fixed positioning
      const creditPercentSignSpan = document.createElement('span');
      creditPercentSignSpan.textContent = '%';
      creditPercentSignSpan.style.position = 'absolute';
      creditPercentSignSpan.style.right = '0px';
      creditPercentSignSpan.style.top = '50%';
      creditPercentSignSpan.style.transform = 'translateY(-50%)';
      creditPercentSignSpan.style.color = '#000000';
      creditPercentSignSpan.style.fontSize = '12px';
      creditPercentSignSpan.style.pointerEvents = 'none';
      creditPercentSignSpan.style.display = 'none'; // Hide initially
      
      creditPercentContainer.appendChild(creditPercentSpan);
      creditPercentContainer.appendChild(creditPercentSignSpan);
      creditPercentCell.appendChild(creditPercentContainer);
      row.appendChild(creditPercentCell);
      
      // Create cell for Credit display
      const creditCell = document.createElement('td');
      creditCell.style.padding = '4px 8px'; // Reduced padding
      creditCell.style.verticalAlign = 'middle';
      creditCell.style.textAlign = 'right';
      creditCell.style.borderBottom = '1px solid #e2e8f0';
      creditCell.style.width = '80px'; // Fixed width for the cell
      
      // Create a container div to maintain fixed width
      const creditContainer = document.createElement('div');
      creditContainer.style.position = 'relative';
      creditContainer.style.width = '60px'; // Changed from 50px to 60px to match Amount
      creditContainer.style.height = '22px';
      creditContainer.style.display = 'inline-block';
      creditContainer.style.float = 'right'; // Align to the right of the cell
      
      // Create the display span for Credit
      const creditSpan = document.createElement('span');
      creditSpan.className = 'credit-display';
      creditSpan.style.width = '100%';
      creditSpan.style.height = '100%';
      creditSpan.style.display = 'inline-block';
      creditSpan.style.lineHeight = '22px'; // Match input height
      creditSpan.style.textAlign = 'right';
      creditSpan.style.paddingRight = '0px'; // Reduce space for $ sign
      creditSpan.style.color = '#2679F3';
      creditSpan.style.fontSize = '12px';
      
      // Add dollar sign with fixed positioning
      const creditDollarSignSpan = document.createElement('span');
      creditDollarSignSpan.className = 'dollar-sign';
      creditDollarSignSpan.textContent = '$';
      creditDollarSignSpan.style.position = 'absolute';
      creditDollarSignSpan.style.left = '0';
      creditDollarSignSpan.style.top = '50%';
      creditDollarSignSpan.style.transform = 'translateY(-50%)';
      creditDollarSignSpan.style.color = '#333333';
      creditDollarSignSpan.style.fontSize = '12px';
      creditDollarSignSpan.style.pointerEvents = 'none';
      creditDollarSignSpan.style.display = 'none';
      
      creditContainer.appendChild(creditDollarSignSpan);
      creditContainer.appendChild(creditSpan);
      creditCell.appendChild(creditContainer);
      row.appendChild(creditCell);
      
      // Create a delete icon outside the table row structure with Vercel Geist-inspired styling
      const deleteIcon = document.createElement('div');
      // Trash/garbage icon using SVG
      deleteIcon.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6H5H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
      deleteIcon.style.cursor = 'pointer';
      deleteIcon.style.color = '#F31260'; // Vercel red color
      deleteIcon.style.backgroundColor = '#FEE7EF'; // Light pink background
      deleteIcon.style.fontSize = '14px';
      deleteIcon.style.width = '24px';
      deleteIcon.style.height = '24px';
      deleteIcon.style.borderRadius = '50%';
      deleteIcon.style.display = 'inline-flex';
      deleteIcon.style.alignItems = 'center';
      deleteIcon.style.justifyContent = 'center';
      deleteIcon.style.transition = 'all 0.2s';
      deleteIcon.style.position = 'absolute';
      deleteIcon.style.right = '-35px'; // Position to the right of the row
      deleteIcon.style.top = '50%';
      deleteIcon.style.transform = 'translateY(-50%)';
      deleteIcon.style.opacity = '0';
      deleteIcon.style.border = '1px solid transparent';
      
      // Add hover effect to the delete icon with Vercel Geist-inspired styling
      deleteIcon.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#FDD5E5'; // Darker pink on hover
        this.style.color = '#E5113C'; // Darker red on hover
        this.style.border = '1px solid #FDA4C4'; // Light border on hover
      });
      
      deleteIcon.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#FEE7EF'; // Back to light pink
        this.style.color = '#F31260'; // Back to normal red
        this.style.border = '1px solid transparent'; // Remove border
      });
      
      // Add click event to remove the row
      deleteIcon.addEventListener('click', function() {
        // Only remove the row if it's not the last one
        const rowCount = tableBody.querySelectorAll('tr').length;
        if (rowCount > 1) {
          row.remove();
          updateResults(); // Update total credits after removing the row
        } else {
          // If it's the last row, change the icon style briefly to indicate it can't be deleted
          const originalColor = this.style.color;
          const originalBg = this.style.backgroundColor;
          const originalBorder = this.style.border;
          
          // Visual feedback that deletion is not allowed
          this.style.color = '#999999';
          this.style.backgroundColor = '#f0f0f0';
          this.style.border = '1px solid #cccccc';
          
          // Reset after a short delay
          setTimeout(() => {
            this.style.color = originalColor;
            this.style.backgroundColor = originalBg;
            this.style.border = originalBorder;
          }, 300);
        }
      });
      
      row.appendChild(deleteIcon);
      
      // Add hover effect to the row to show delete icon only if there's more than one row
      row.addEventListener('mouseover', function() {
        // Check if there's more than one row before showing the delete icon
        const rowCount = tableBody.querySelectorAll('tr').length;
        if (rowCount > 1) {
          deleteIcon.style.opacity = '1';
        }
      });
      
      row.addEventListener('mouseout', function() {
        deleteIcon.style.opacity = '0';
      });
      
      // Also check initially and when rows are added/removed
      const updateDeleteIconVisibility = function() {
        // If this is the only row, hide the delete icon regardless of hover
        const rowCount = tableBody.querySelectorAll('tr').length;
        if (rowCount <= 1) {
          deleteIcon.style.opacity = '0';
          deleteIcon.style.pointerEvents = 'none'; // Also disable clicks
        } else {
          deleteIcon.style.pointerEvents = 'auto'; // Re-enable clicks
        }
      };
      
      // Create a MutationObserver to watch for changes in the table
      const observer = new MutationObserver(updateDeleteIconVisibility);
      observer.observe(tableBody, { childList: true });
      
      // Call initially
      setTimeout(updateDeleteIconVisibility, 0);
      
      // Function to update the Qualified % based on Type and US-Based
      const updateQualifiedPercent = function() {
        if (!usBasedCheckbox.checked) {
          qualifiedPercentSpan.textContent = '';
          qualifiedPercentSignSpan.style.display = 'none';
        } else {
          const typeValue = typeSelect.value;
          if (!typeValue) {
            qualifiedPercentSpan.textContent = '';
            qualifiedPercentSignSpan.style.display = 'none';
          } else if (typeValue === 'contractor') {
            qualifiedPercentSpan.textContent = '65';
            qualifiedPercentSignSpan.style.display = 'block';
          } else {
            qualifiedPercentSpan.textContent = '100';
            qualifiedPercentSignSpan.style.display = 'block';
          }
        }
        
        // After updating qualified percent, update the dependent calculations
        updateRDExpenses();
        updateCreditPercent();
        updateCredit();
      };
      
      // Function to update R&D Expenses (Amount * R&D % * Qualified %)
      const updateRDExpenses = function() {
        const amountValue = parseFloat(input.dataset.rawValue || '0');
        const rdPercentValue = parseInt(rdPercentInput.value || '0');
        const qualifiedPercentValue = parseInt(qualifiedPercentSpan.textContent || '0');
        
        if (amountValue > 0 && rdPercentValue > 0 && qualifiedPercentValue > 0) {
          const rdExpenses = amountValue * (rdPercentValue / 100) * (qualifiedPercentValue / 100);
          rdExpensesSpan.textContent = formatNumber(Math.ceil(rdExpenses));
          rdExpensesDollarSignSpan.style.display = 'block';
        } else {
          rdExpensesSpan.textContent = '';
          rdExpensesDollarSignSpan.style.display = 'none';
        }
      };
      
      // Function to update Credit % (10% if all conditions met)
      const updateCreditPercent = function() {
        const typeValue = typeSelect.value;
        const amountValue = parseFloat(input.dataset.rawValue || '0');
        const rdPercentValue = parseInt(rdPercentInput.value || '0');
        
        if (typeValue && usBasedCheckbox.checked && amountValue > 0 && rdPercentValue > 0) {
          creditPercentSpan.textContent = '10';
          creditPercentSignSpan.style.display = 'block';
        } else {
          creditPercentSpan.textContent = '';
          creditPercentSignSpan.style.display = 'none';
        }
      };
      
      // Function to update Credit (R&D Expenses * Credit %)
      const updateCredit = function() {
        const rdExpensesText = rdExpensesSpan.textContent.replace(/,/g, '');
        const rdExpensesValue = parseFloat(rdExpensesText || '0');
        const creditPercentValue = parseInt(creditPercentSpan.textContent || '0');
        
        if (rdExpensesValue > 0 && creditPercentValue > 0) {
          const creditAmount = rdExpensesValue * (creditPercentValue / 100);
          creditSpan.textContent = formatNumber(Math.ceil(creditAmount));
          creditDollarSignSpan.style.display = 'block';
        } else {
          creditSpan.textContent = '';
          creditDollarSignSpan.style.display = 'none';
        }
        
        // Update total credits
        if (typeof updateTotalCredits === 'function') {
          updateTotalCredits();
        }
      };
      
      // Add event listeners to update all calculations
      typeSelect.addEventListener('change', function() {
        updateQualifiedPercent();
        updateResults();
      });
      
      usBasedCheckbox.addEventListener('change', function() {
        updateQualifiedPercent();
        updateResults();
      });
      
      input.addEventListener('input', function() {
        updateRDExpenses();
        updateCreditPercent();
        updateCredit();
        updateResults();
      });
      
      rdPercentInput.addEventListener('input', function() {
        updateRDExpenses();
        updateCreditPercent();
        updateCredit();
        updateResults();
      });
      
      // Initialize Qualified % display
      updateQualifiedPercent();
      
      // Add the row to the table body
      tableBody.appendChild(row);
      
      // Add event listener for amount input
      input.addEventListener('input', function(e) {
        // Get the input value without commas
        let rawValue = e.target.value.replace(/,/g, '');
        
        // Limit to 6 digits
        if (rawValue.length > 6) {
          rawValue = rawValue.substring(0, 6);
        }
        
        // Store the raw value
        e.target.dataset.rawValue = rawValue || '0';
        
        // If it's a valid number, format it with commas
        if (rawValue && !isNaN(rawValue)) {
          // Remember cursor position
          const cursorPos = e.target.selectionStart;
          const oldLength = e.target.value.length;
          
          // Format with commas
          e.target.value = formatNumber(parseFloat(rawValue));
          
          // Adjust cursor position
          const newLength = e.target.value.length;
          const newPos = cursorPos + (newLength - oldLength);
          e.target.setSelectionRange(newPos, newPos);
        }
        
        // Update calculations
        updateResults();
      });
    });
    
    // Find the main content area
    const mainContent = document.querySelector('.prose');
    
    if (mainContent) {
      // Insert before the footer
      mainContent.appendChild(exampleSection);
      
      // Function to update the total credits display and eligibility message
      function updateTotalCredits() {
        // Get all credit cells
        const creditSpans = document.querySelectorAll('.credit-display');
        let total = 0;
        
        // Sum up all credits
        creditSpans.forEach(span => {
          if (span.textContent) {
            const value = parseFloat(span.textContent.replace(/,/g, '')) || 0;
            total += value;
          }
        });
        
        // Update the total display
        const totalElement = document.getElementById('total-credits-value');
        if (total > 0) {
          totalElement.textContent = '$' + formatNumber(Math.ceil(total));
        } else {
          totalElement.textContent = '$0';
        }
        
        // Update the eligibility message based on conditions
        updateEligibilityMessage(total);
      }
      
      // Add event listeners to all inputs
      document.querySelectorAll('input, select').forEach(input => {
        input.addEventListener('input', updateTotalCredits);
        input.addEventListener('change', updateTotalCredits);
      });
      
      // Add event listeners for the new incorporation year and revenue radio buttons
      document.getElementById('incorporation-before')?.addEventListener('change', updateTotalCredits);
      document.getElementById('incorporation-after')?.addEventListener('change', updateTotalCredits);
      document.getElementById('revenue-low')?.addEventListener('change', updateTotalCredits);
      document.getElementById('revenue-high')?.addEventListener('change', updateTotalCredits);
      
      // Function to update the eligibility message based on conditions
      function updateEligibilityMessage(totalCredits) {
        const line1Element = document.getElementById('eligibility-message-line1');
        const line2Element = document.getElementById('eligibility-message-line2');
        if (!line1Element || !line2Element) return;
        
        // Get the formatted total credits value
        const formattedTotal = '$' + formatNumber(Math.ceil(totalCredits));
        
        // Check incorporation date selection
        const isRecentIncorporation = document.getElementById('incorporation-after').checked;
        
        // Check revenue selection
        const isLowRevenue = document.getElementById('revenue-low').checked;
        
        // Check if total credits are <= $500K
        const isLowCredits = totalCredits <= 500000;
        
        // Combine both lines into one
        if (isLowCredits && isRecentIncorporation && isLowRevenue) {
          line1Element.innerHTML = `You're eligible for <span style="font-weight: bold">${formattedTotal}</span> of tax credits. You can get a cash refund or reduce income taxes.`;
          line2Element.textContent = '';
        } else {
          line1Element.innerHTML = `You're eligible for <span style="font-weight: bold">${formattedTotal}</span> of tax credits. You can only use it to reduce income taxes.`;
          line2Element.textContent = '';
        }
      }
      
      // Add event listeners to the incorporation and revenue radio buttons
      document.querySelectorAll('input[name="incorporation"], input[name="revenue"]').forEach(radio => {
        radio.addEventListener('change', updateTotalCredits);
      });
      
      // Initial calculation
      updateTotalCredits();
    }
  }
});

// Add a fallback to ensure the script runs even if DOMContentLoaded already fired
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  console.log('Document already loaded, running script immediately');
  setTimeout(function() {
    const event = new Event('DOMContentLoaded');
    document.dispatchEvent(event);
  }, 1000);
} 
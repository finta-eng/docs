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
    exampleSection.style.marginTop = '2rem';
    exampleSection.style.marginBottom = '2rem';
    
    // Add the Example header
    const header = document.createElement('h3');
    header.textContent = 'Example';
    exampleSection.appendChild(header);
    
    // Add description
    const description = document.createElement('p');
    exampleSection.appendChild(description);
    
    // Define the expense types and their credit rates
    const expenses = [
      { name: 'Employee salaries', rate: 0.10 },
      { name: 'Contractor payments', rate: 0.065 }
    ];
    
    // Create a table for the calculator
    const calculatorTable = document.createElement('table');
    calculatorTable.style.width = '100%';
    calculatorTable.style.borderCollapse = 'collapse';
    calculatorTable.style.marginTop = '16px';
    calculatorTable.style.borderSpacing = '0';

    // Create table header
    const tableHeader = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.style.borderBottom = '1px solid #e2e8f0';

    // Create header cells
    const typeHeader = document.createElement('th');
    typeHeader.textContent = 'Type';
    typeHeader.style.textAlign = 'left';
    typeHeader.style.padding = '4px 0 4px 8px'; // Match cell padding
    typeHeader.style.fontWeight = 'bold';
    typeHeader.style.borderBottom = '2px solid #e2e8f0';

    const personVendorHeader = document.createElement('th');
    personVendorHeader.textContent = 'Person / vendor';
    personVendorHeader.style.textAlign = 'left';
    personVendorHeader.style.padding = '4px 0 4px 8px'; // Match Type column padding
    personVendorHeader.style.fontWeight = 'bold';
    personVendorHeader.style.borderBottom = '2px solid #e2e8f0';

    const amountHeader = document.createElement('th');
    amountHeader.textContent = 'Gross Pay';
    amountHeader.style.textAlign = 'right';
    amountHeader.style.padding = '4px 8px'; // Reduced padding
    amountHeader.style.fontWeight = 'bold';
    amountHeader.style.borderBottom = '2px solid #e2e8f0';
    amountHeader.style.width = '100px'; // Match cell width

    const rdPercentHeader = document.createElement('th');
    rdPercentHeader.textContent = 'R&D %';
    rdPercentHeader.style.textAlign = 'right';
    rdPercentHeader.style.padding = '4px 8px'; // Reduced padding
    rdPercentHeader.style.fontWeight = 'bold';
    rdPercentHeader.style.borderBottom = '2px solid #e2e8f0';
    rdPercentHeader.style.width = '75px'; // Match cell width

    const usBasedHeader = document.createElement('th');
    usBasedHeader.textContent = 'US-Based';
    usBasedHeader.style.textAlign = 'center';
    usBasedHeader.style.padding = '4px 8px'; // Reduced padding
    usBasedHeader.style.fontWeight = 'bold';
    usBasedHeader.style.borderBottom = '2px solid #e2e8f0';
    usBasedHeader.style.width = '100px'; // Fixed width for the column

    // Add header cells to header row
    headerRow.appendChild(typeHeader);
    headerRow.appendChild(personVendorHeader);
    headerRow.appendChild(amountHeader);
    headerRow.appendChild(rdPercentHeader);
    headerRow.appendChild(usBasedHeader);

    // Add header row to table header
    tableHeader.appendChild(headerRow);

    // Add table header to table
    calculatorTable.appendChild(tableHeader);

    // Create table body
    const tableBody = document.createElement('tbody');
    calculatorTable.appendChild(tableBody);

    // Add table to the example section
    exampleSection.appendChild(calculatorTable);
    
    // Function to format number with thousand separators
    const formatNumber = function(number) {
      return new Intl.NumberFormat('en-US').format(number);
    };
    
    // Create rows for each expense type
    expenses.forEach(expense => {
      // Create a table row
      const row = document.createElement('tr');
      row.style.borderBottom = '1px solid #e2e8f0';
      
      // Create cell for Type dropdown
      const typeCell = document.createElement('td');
      typeCell.style.padding = '4px 0 4px 8px'; // Remove right padding
      typeCell.style.verticalAlign = 'middle';
      typeCell.style.borderBottom = '1px solid #e2e8f0';
      
      // Create the dropdown for Type
      const typeSelect = document.createElement('select');
      typeSelect.className = 'calculator-input';
      typeSelect.style.width = '100px';
      typeSelect.style.height = '22px'; // Reduced height
      typeSelect.style.paddingLeft = '0'; // Remove left padding
      typeSelect.style.paddingRight = '24px';
      typeSelect.style.textAlign = 'left';
      typeSelect.style.appearance = 'none';
      typeSelect.style.backgroundColor = '#FFFFFF';
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
      
      // Create cell for Person or Vendor input
      const personVendorCell = document.createElement('td');
      personVendorCell.style.padding = '4px 0 4px 8px'; // Match header padding
      personVendorCell.style.verticalAlign = 'middle';
      personVendorCell.style.borderBottom = '1px solid #e2e8f0';
      
      // Create the input field for Person or Vendor
      const personVendorInput = document.createElement('input');
      personVendorInput.type = 'text';
      personVendorInput.className = 'calculator-input person-vendor-input';
      personVendorInput.style.width = '100px';
      personVendorInput.style.height = '22px'; // Reduced height
      personVendorInput.style.paddingLeft = '0'; // Remove left padding
      personVendorInput.style.paddingRight = '8px';
      personVendorInput.style.textAlign = 'left';
      personVendorInput.style.backgroundColor = '#FFFFFF';
      personVendorInput.style.border = 'none'; // Remove border
      personVendorInput.style.borderRadius = '0';
      personVendorInput.style.boxShadow = 'none'; // Remove shadow
      personVendorInput.style.boxSizing = 'border-box'; // Ensure padding doesn't affect width
      personVendorInput.dataset.expenseType = expense.name;
      
      personVendorCell.appendChild(personVendorInput);
      row.appendChild(personVendorCell);
      
      // Create cell for Amount input
      const amountCell = document.createElement('td');
      amountCell.style.padding = '4px 8px'; // Reduced padding
      amountCell.style.verticalAlign = 'middle';
      amountCell.style.position = 'relative';
      amountCell.style.textAlign = 'right';
      amountCell.style.borderBottom = '1px solid #e2e8f0';
      amountCell.style.width = '100px'; // Fixed width for the cell
      
      // Create a container div to maintain fixed width
      const amountInputContainer = document.createElement('div');
      amountInputContainer.style.position = 'relative';
      amountInputContainer.style.width = '80px';
      amountInputContainer.style.height = '22px';
      amountInputContainer.style.display = 'inline-block';
      amountInputContainer.style.float = 'right'; // Align to the right of the cell
      
      // Create the input field for Amount
      const input = document.createElement('input');
      input.type = 'text'; // Changed to text to handle formatted numbers
      input.className = 'calculator-input amount-input';
      input.style.width = '100%';
      input.style.height = '100%';
      input.style.paddingLeft = '20px';
      input.style.paddingRight = '2px';
      input.style.textAlign = 'right';
      input.style.backgroundColor = '#FFFFFF';
      input.style.border = 'none'; // Remove border
      input.style.borderRadius = '0';
      input.style.boxShadow = 'none'; // Remove shadow
      input.style.boxSizing = 'border-box'; // Ensure padding doesn't affect width
      input.dataset.expenseType = expense.name;
      input.dataset.rate = expense.rate;
      input.dataset.rawValue = '0'; // Store raw numeric value
      
      // Add dollar sign with fixed positioning
      const dollarSignSpan = document.createElement('span');
      dollarSignSpan.textContent = '$';
      dollarSignSpan.style.position = 'absolute';
      dollarSignSpan.style.left = '8px'; // Adjusted for container
      dollarSignSpan.style.top = '50%'; // Center vertically
      dollarSignSpan.style.transform = 'translateY(-50%)'; // Perfect centering
      dollarSignSpan.style.color = '#a0aec0';
      dollarSignSpan.style.fontSize = '12px';
      dollarSignSpan.style.pointerEvents = 'none';
      
      amountInputContainer.appendChild(input);
      amountInputContainer.appendChild(dollarSignSpan);
      amountCell.appendChild(amountInputContainer);
      row.appendChild(amountCell);
      
      // Create cell for R&D % input
      const rdPercentCell = document.createElement('td');
      rdPercentCell.style.padding = '4px 8px'; // Reduced padding
      rdPercentCell.style.verticalAlign = 'middle';
      rdPercentCell.style.position = 'relative';
      rdPercentCell.style.textAlign = 'right';
      rdPercentCell.style.borderBottom = '1px solid #e2e8f0';
      rdPercentCell.style.width = '75px'; // Fixed width for the cell
      
      // Create a container div to maintain fixed width
      const rdInputContainer = document.createElement('div');
      rdInputContainer.style.position = 'relative';
      rdInputContainer.style.width = '55px';
      rdInputContainer.style.height = '22px';
      rdInputContainer.style.display = 'inline-block';
      rdInputContainer.style.float = 'right'; // Align to the right of the cell
      
      // Create the input field for R&D %
      const rdPercentInput = document.createElement('input');
      rdPercentInput.type = 'number';
      rdPercentInput.min = '0';
      rdPercentInput.max = '100';
      rdPercentInput.step = '1'; // Increment by whole numbers only
      rdPercentInput.className = 'calculator-input percent-input';
      rdPercentInput.style.width = '100%';
      rdPercentInput.style.height = '100%';
      rdPercentInput.style.paddingLeft = '8px';
      rdPercentInput.style.paddingRight = '15px';
      rdPercentInput.style.textAlign = 'right';
      rdPercentInput.style.backgroundColor = '#FFFFFF';
      rdPercentInput.style.border = 'none'; // Remove border
      rdPercentInput.style.borderRadius = '0';
      rdPercentInput.style.boxShadow = 'none'; // Remove shadow
      rdPercentInput.style.boxSizing = 'border-box'; // Ensure padding doesn't affect width
      rdPercentInput.dataset.expenseType = expense.name;
      
      // Add percent sign with fixed positioning
      const percentSignSpan = document.createElement('span');
      percentSignSpan.textContent = '%';
      percentSignSpan.style.position = 'absolute';
      percentSignSpan.style.right = '0px'; // Match header padding
      percentSignSpan.style.top = '50%'; // Center vertically
      percentSignSpan.style.transform = 'translateY(-50%)'; // Perfect centering
      percentSignSpan.style.color = '#a0aec0';
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
      
      // Create cell for US-Based checkbox
      const usBasedCell = document.createElement('td');
      usBasedCell.style.padding = '4px 8px'; // Reduced padding
      usBasedCell.style.verticalAlign = 'middle';
      usBasedCell.style.textAlign = 'center';
      usBasedCell.style.borderBottom = '1px solid #e2e8f0';
      
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
      
      // Add event listener for input changes
      const updateResults = function() {
        // Get all amount inputs
        const amountInputs = document.querySelectorAll('.amount-input');
        
        // No need to update results since we removed the result column
      };
      
      // Add event listeners to percent inputs
      document.querySelectorAll('.percent-input').forEach(input => {
        input.addEventListener('input', updateResults);
      });
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
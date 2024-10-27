// calculator.js

document.getElementById('carbonForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Retrieve values from each input field and parse them
  const electricity = parseFloat(document.getElementById('electricity').value) || 0;
  const naturalGas = parseFloat(document.getElementById('naturalGas').value) || 0;
  const fuelCombustion = parseFloat(document.getElementById('fuelCombustion').value) || 0;
  const businessTrips = parseFloat(document.getElementById('businessTrips').value) || 0;
  const carUsage = parseFloat(document.getElementById('carUsage').value) || 0;
  const goodsTrain = parseFloat(document.getElementById('goodsTrain').value) || 0;
  const goodsTruck = parseFloat(document.getElementById('goodsTruck').value) || 0;
  const foodProducts = parseFloat(document.getElementById('foodProducts').value) || 0;
  const itEquipment = parseFloat(document.getElementById('itEquipment').value) || 0;
  const companyName = document.getElementById('companyName').value || 0;
  const paper= document.getElementById('paper').value || 0;
  const water = document.getElementById('water').value || 0;
  const waste = document.getElementById('waste').value || 0;

  // Emission factors for each input (in kg CO₂ per unit)
  const emissionFactors = {
    electricity: 0.233,
    naturalGas: 2.3,
    fuelCombustion: 2.68,
    businessTrips: 0.25,
    carUsage: 0.21,
    goodsTrain: 0.1,
    goodsTruck: 0.4,
    foodProducts: 2.5,
    itEquipment: 0.15,
    paper: 1.4,
    water: 0.0003,
    waste: 3  
  };

  // Calculate emissions for each category
  const electricityEmissions = electricity * emissionFactors.electricity;
  const naturalGasEmissions = naturalGas * emissionFactors.naturalGas;
  const fuelCombustionEmissions = fuelCombustion * emissionFactors.fuelCombustion;

  const transportationEmissions =
    businessTrips * emissionFactors.businessTrips +
    carUsage * emissionFactors.carUsage +
    goodsTrain * emissionFactors.goodsTrain +
    goodsTruck * emissionFactors.goodsTruck;

  const miscellaneousEmissions =
    foodProducts * emissionFactors.foodProducts +
    itEquipment * emissionFactors.itEquipment +
    water * emissionFactors.water +
    paper * emissionFactors.paper +
    waste * emissionFactors.waste;

  // Total emissions
  const totalEmissions = electricityEmissions + naturalGasEmissions + fuelCombustionEmissions +
    transportationEmissions + miscellaneousEmissions;

  // Display the result
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `Total Carbon Footprint: ${totalEmissions.toFixed(2)} kg CO₂`;
});

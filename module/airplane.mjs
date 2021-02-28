export let availableAirplanes = [
  {
    name: "AeroJet",
    fuelCapacity: 800,
    availableStaff: [
      "pilots",
      "flightAttendants",
      "engineers",
      "medicalAssistance",
      "sensorOperators",
    ],
  },
  {
    name: "SkyJet",
    fuelCapacity: 500,
    availableStaff: ["pilots", "flightAttendants"],
  },
];

export let flightRequirements = {
  requiredStaff: 4,
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
}

//export { availableAirplanes, flightRequirements, meetsStaffRequirements };

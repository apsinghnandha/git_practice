// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//step 4
//no two organisms should have the same number
var sNum = 1;
let specimenNum = () => {
  return sNum++;
};

const pAequorFactory = (a = specimenNum(), b = mockUpStrand()) => {
  return {
    specimenNum: a,
    dna: b,
    mutate() {
      //Random dna base selected & excluded from 4 types. Select 1 from other 3 randomly and push at end

      //DNA mutation base randomly selected
      const dnaMutationBase = returnRandBase();
      console.log('Mutation Base: ' + dnaMutationBase);

      //exclude rest from mutated DNA base
      const dnaBases = ['A', 'T', 'C', 'G'];
      const dnaMutationAvailableForChange = dnaBases.filter((base) => base !== dnaMutationBase);
      const dnaChangedToBase = dnaMutationAvailableForChange[Math.floor(Math.random() * 3)];
      console.log('Mutation New Base: ' + dnaChangedToBase);

      for (let x = 0; x < this.dna.length; x++) {
        if (this.dna[x] === dnaMutationBase) {
          this.dna.splice(x, 1, dnaChangedToBase);
        }
      }
      return this.dna;
    },

    compareDNA(otherDNA) {
      let commonDNA = 0;
      for (let x = 0; x < this.dna.length; x++) {
        if (this.dna[x] === otherDNA[x]) {
          commonDNA++;
        }
      }
      console.log('Common: ' + commonDNA);
      console.log(`${((commonDNA / otherDNA.length) * 100).toFixed(2)}% DNA in common`);
    },

    willLikelySurvive() {
      let dnaBaseCG = 0;
      for (let x = 0; x < this.dna.length; x++) {
        if ((this.dna[x] === 'C') | (this.dna[x] === 'G')) {
          dnaBaseCG++;
        }
      }

      if ((dnaBaseCG / this.dna.length) * 100 >= 60) {
        console.log('DNA: ' + this.dna);
        console.log('%CG: ' + ((dnaBaseCG / this.dna.length) * 100).toFixed(2));
        return true;
      } else {
        return false;
      }
    },
  };
};

let DNA30 = () => {
  let survivedDNA = 1;
  while (survivedDNA <= 30) {
    let dnaFun = pAequorFactory();
    let x = dnaFun.dna.join(' ');
    let y = dnaFun.mutate().join(' ');
    console.log('specimenNum: ' + dnaFun.specimenNum + '      DNA Original: ' + x);
    console.log('specimenNum: ' + dnaFun.specimenNum + '      DNA  Mutated: ' + y);

    dnaFun.compareDNA(y);
    console.log(' ');
    survivedDNA++;
  }
};


let survive30 = () => {
  let survivedDNA = 1;
  while (survivedDNA <= 30) {
    let x = pAequorFactory();
    if (x.willLikelySurvive() === true) {
      survivedDNA++;
      console.log('DNA Survive: ' + survivedDNA + ' ');
    }
  }
};

DNA30();
survive30();

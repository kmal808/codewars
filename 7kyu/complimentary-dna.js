//! COMPLIMENTARY DNA

//* Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

//* If you want to know more: http://en.wikipedia.org/wiki/DNA

//* In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

//* More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

//* Example: (input --> output)

//* "ATTGC" --> "TAACG"
//* "GTAT" --> "CATA"
//* dnaStrand []        `shouldBe` []
//* dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
//* dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
//* dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]



//? MY SOLUTION 

function DNAStrand(dna){
  let newDNA = ""
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] == "A") {
      newDNA += "T"
    } else if (dna[i] == "T") {
      newDNA += "A"
    } else if (dna[i] == "G") {
      newDNA += "C"
    } else if (dna[i] == "C") {
      newDNA += "G"
    } else {
      newDNA += dna[i]
    }
  }
  return newDNA
}

//? TOP SOLUTION 

function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}

//? ONE LINER

onst DNAStrand = dna => dna.replace(/./g, m => 'CGAT'['GCTA'.indexOf(m)]);
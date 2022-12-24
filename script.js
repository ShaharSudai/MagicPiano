const piano = document.getElementById('piano');
      
      document.getElementById('scale-select').onchange = function() {
        updateScale(this.value);
      }
      
      function updateScale(scale) {
        // Clear the active class from all keys
        const keys = document.querySelectorAll('#piano .white');
        keys.forEach(function(key) {
          key.classList.remove('active');
        });
      
        // Add the active class to the keys for the selected scale
        const scaleNotes = SCALES[scale];
        scaleNotes.forEach(function(note) {
          const key = piano.querySelector(`[data-note="${note}"]`);
          key.classList.add('active');
        });
      }
      const SCALES = {
        C: {
            notes: [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84],
            audio: {
              60: 'C.mp3',
              62: 'D.mp3',
              64: 'E.mp3',
              65: 'F.mp3',
              67: 'G.mp3',
              69: 'A.mp3',
              71: 'B.mp3',
              72: 'C2.mp3',
              74: 'D2.mp3',
              76: 'E2.mp3',
              77: 'F2.mp3',
              79: 'G2.mp3',
              81: 'A2.mp3',
              83: 'B2.mp3',
              84: 'C3.mp3',
            }
          },
          Csharp: {
            notes: [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84],
            audio: {
              60: 'CS.mp3',
              62: 'DS.mp3',
              64: 'F.mp3',
              65: 'FS.mp3',
              67: 'GS.mp3',
              69: 'AS.mp3',
              71: 'C2.mp3',
              72: 'C2S.mp3',
              74: 'D2S.mp3',
              76: 'F2.mp3',
              77: 'F2S.mp3',
              79: 'G2S.mp3',
              81: 'A2S.mp3',
              83: 'C3.mp3',
              84: 'C3S.mp3',
            }
          },
          D: {
            notes: [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84],
            audio: {
              60: 'D.mp3',
              62: 'E.mp3',
              64: 'FS.mp3',
              65: 'G.mp3',
              67: 'A.mp3',
              69: 'B.mp3',
              71: 'C2S.mp3',
              72: 'D2.mp3',
              74: 'E2.mp3',
              76: 'F2S.mp3',
              77: 'G2.mp3',
              79: 'A2.mp3',
              81: 'B2.mp3',
              83: 'C3S.mp3',
              84: 'D3.mp3',
            }
          },
          Dsharp: {
            notes: [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84],
            audio: {
              60: 'DS.mp3',
              62: 'F.mp3',
              64: 'G.mp3',
              65: 'GS.mp3',
              67: 'AS.mp3',
              69: 'C2.mp3',
              71: 'D2.mp3',
              72: 'D2S.mp3',
              74: 'F2.mp3',
              76: 'G2.mp3',
              77: 'G2S.mp3',
              79: 'A2S.mp3',
              81: 'C3.mp3',
              83: 'D3.mp3',
              84: 'D3S.mp3',
            }
          },
          E: {
            notes: [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84],
            audio: {
              60: 'E.mp3',
              62: 'FS.mp3',
              64: 'GS.mp3',
              65: 'A.mp3',
              67: 'B.mp3',
              69: 'C2S.mp3',
              71: 'D2S.mp3',
              72: 'E2.mp3',
              74: 'F2S.mp3',
              76: 'G2S.mp3',
              77: 'A2.mp3',
              79: 'B2.mp3',
              81: 'C3S.mp3',
              83: 'D3S.mp3',
              84: 'E3.mp3',
            }
          },
          F: {
            notes: [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84],
            audio: {
              60: 'F.mp3',
              62: 'G.mp3',
              64: 'A.mp3',
              65: 'AS.mp3',
              67: 'C2.mp3',
              69: 'D2.mp3',
              71: 'E2.mp3',
              72: 'F2.mp3',
              74: 'G2.mp3',
              76: 'A2.mp3',
              77: 'A2S.mp3',
              79: 'C3.mp3',
              81: 'D3.mp3',
              83: 'E3.mp3',
              84: 'F3.mp3',
            }
          },
          Fsharp: {
            notes: [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84],
            audio: {
              60: 'FS.mp3',
              62: 'GS.mp3',
              64: 'AS.mp3',
              65: 'B.mp3',
              67: 'C2S.mp3',
              69: 'D2S.mp3',
              71: 'F2.mp3',
              72: 'F2S.mp3',
              74: 'G2S.mp3',
              76: 'A2S.mp3',
              77: 'B2.mp3',
              79: 'C3S.mp3',
              81: 'D3S.mp3',
              83: 'F3.mp3',
              84: 'F3S.mp3',
            }
          },
          G: {
            notes: [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84],
            audio: {
              60: 'G.mp3',
              62: 'A.mp3',
              64: 'B.mp3',
              65: 'C2.mp3',
              67: 'D2.mp3',
              69: 'E2.mp3',
              71: 'F2S.mp3',
              72: 'G2.mp3',
              74: 'A2.mp3',
              76: 'B2.mp3',
              77: 'C3.mp3',
              79: 'D3.mp3',
              81: 'E3.mp3',
              83: 'F3S.mp3',
              84: 'G3.mp3',
            }
          },
          Gsharp: {
            notes: [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84],
            audio: {
              60: 'GS.mp3',
              62: 'AS.mp3',
              64: 'C2.mp3',
              65: 'C2S.mp3',
              67: 'D2S.mp3',
              69: 'F2.mp3',
              71: 'G2.mp3',
              72: 'G2S.mp3',
              74: 'A2S.mp3',
              76: 'C3.mp3',
              77: 'C3S.mp3',
              79: 'D3S.mp3',
              81: 'F3.mp3',
              83: 'G3.mp3',
              84: 'G3S.mp3',
            }
          },
          A: {
            notes: [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84],
            audio: {
              60: 'A.mp3',
              62: 'B.mp3',
              64: 'C2S.mp3',
              65: 'D2.mp3',
              67: 'E2.mp3',
              69: 'F2S.mp3',
              71: 'G2S.mp3',
              72: 'A2.mp3',
              74: 'B2.mp3',
              76: 'C3S.mp3',
              77: 'D3.mp3',
              79: 'E3.mp3',
              81: 'F3S.mp3',
              83: 'G3S.mp3',
              84: 'A3.mp3',
            }
          },
          Asharp: {
            notes: [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84],
            audio: {
              60: 'AS.mp3',
              62: 'C2.mp3',
              64: 'D2.mp3',
              65: 'D2S.mp3',
              67: 'F2.mp3',
              69: 'G2.mp3',
              71: 'A2.mp3',
              72: 'A2S.mp3',
              74: 'C3.mp3',
              76: 'D3.mp3',
              77: 'D3S.mp3',
              79: 'F3.mp3',
              81: 'G3.mp3',
              83: 'A3.mp3',
              84: 'A3S.mp3',
            }
          },
          B: {
            notes: [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84],
            audio: {
              60: 'B.mp3',
              62: 'C2S.mp3',
              64: 'D2S.mp3',
              65: 'E2.mp3',
              67: 'F2S.mp3',
              69: 'G2S.mp3',
              71: 'A2S.mp3',
              72: 'B2.mp3',
              74: 'C3S.mp3',
              76: 'D3S.mp3',
              77: 'E3.mp3',
              79: 'F3S.mp3',
              81: 'G3S.mp3',
              83: 'A3S.mp3',
              84: 'B3.mp3',
            }
          },
          Cm: {
            notes: [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84],
            audio: {
              60: 'C.mp3',
              62: 'D.mp3',
              64: 'DS.mp3',
              65: 'F.mp3',
              67: 'G.mp3',
              69: 'GS.mp3',
              71: 'AS.mp3',
              72: 'C2.mp3',
              74: 'D2.mp3',
              76: 'D2S.mp3',
              77: 'F2.mp3',
              79: 'G2.mp3',
              81: 'G2S.mp3',
              83: 'A2S.mp3',
              84: 'C3.mp3',
            }
          },
          Cmsharp: {
            notes: [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84],
            audio: {
              60: 'CS.mp3',
              62: 'DS.mp3',
              64: 'E.mp3',
              65: 'FS.mp3',
              67: 'GS.mp3',
              69: 'A.mp3',
              71: 'B.mp3',
              72: 'C2S.mp3',
              74: 'D2S.mp3',
              76: 'E2.mp3',
              77: 'F2S.mp3',
              79: 'G2S.mp3',
              81: 'A2.mp3',
              83: 'B2.mp3',
              84: 'C3S.mp3',
            }
          },
          Dm: {
            notes: [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84],
            audio: {
              60: 'D.mp3',
              62: 'E.mp3',
              64: 'F.mp3',
              65: 'G.mp3',
              67: 'A.mp3',
              69: 'AS.mp3',
              71: 'C2.mp3',
              72: 'D2.mp3',
              74: 'E2.mp3',
              76: 'F2.mp3',
              77: 'G2.mp3',
              79: 'A2.mp3',
              81: 'A2S.mp3',
              83: 'C3.mp3',
              84: 'D3.mp3',
            }
          },
          Dmsharp: {
            notes: [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84],
            audio: {
              60: 'DS.mp3',
              62: 'F.mp3',
              64: 'FS.mp3',
              65: 'GS.mp3',
              67: 'AS.mp3',
              69: 'B.mp3',
              71: 'C2S.mp3',
              72: 'D2S.mp3',
              74: 'F2.mp3',
              76: 'F2S.mp3',
              77: 'G2S.mp3',
              79: 'A2S.mp3',
              81: 'B2.mp3',
              83: 'C3S.mp3',
              84: 'D3S.mp3',
            }
          },
          Em: {
            notes: [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84],
            audio: {
              60: 'E.mp3',
              62: 'FS.mp3',
              64: 'G.mp3',
              65: 'A.mp3',
              67: 'B.mp3',
              69: 'C2.mp3',
              71: 'D2.mp3',
              72: 'E2.mp3',
              74: 'F2S.mp3',
              76: 'G2.mp3',
              77: 'A2.mp3',
              79: 'B2.mp3',
              81: 'C3.mp3',
              83: 'D3.mp3',
              84: 'E3.mp3',
            }
          },
          Fm: {
            notes: [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84],
            audio: {
              60: 'F.mp3',
              62: 'G.mp3',
              64: 'GS.mp3',
              65: 'AS.mp3',
              67: 'C2.mp3',
              69: 'C2S.mp3',
              71: 'D2S.mp3',
              72: 'F2.mp3',
              74: 'G2.mp3',
              76: 'G2S.mp3',
              77: 'A2S.mp3',
              79: 'C3.mp3',
              81: 'C3S.mp3',
              83: 'D3S.mp3',
              84: 'F3.mp3',
            }
          },
          Fmsharp: {
            notes: [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84],
            audio: {
              60: 'FS.mp3',
              62: 'GS.mp3',
              64: 'A.mp3',
              65: 'B.mp3',
              67: 'C2S.mp3',
              69: 'D2.mp3',
              71: 'E2.mp3',
              72: 'F2S.mp3',
              74: 'G2S.mp3',
              76: 'A2.mp3',
              77: 'B2.mp3',
              79: 'C3S.mp3',
              81: 'D3.mp3',
              83: 'E3.mp3',
              84: 'F3S.mp3',
            }
          },
          Gm: {
            notes: [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84],
            audio: {
              60: 'G.mp3',
              62: 'A.mp3',
              64: 'AS.mp3',
              65: 'C2.mp3',
              67: 'D2.mp3',
              69: 'D2S.mp3',
              71: 'F2.mp3',
              72: 'G2.mp3',
              74: 'A2.mp3',
              76: 'A2S.mp3',
              77: 'C3.mp3',
              79: 'D3.mp3',
              81: 'D3S.mp3',
              83: 'F3.mp3',
              84: 'G3.mp3',
            }
          },
          Gmsharp: {
            notes: [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84],
            audio: {
              60: 'GS.mp3',
              62: 'AS.mp3',
              64: 'B.mp3',
              65: 'C2S.mp3',
              67: 'D2S.mp3',
              69: 'E2.mp3',
              71: 'F2S.mp3',
              72: 'G2S.mp3',
              74: 'A2S.mp3',
              76: 'B2.mp3',
              77: 'C3S.mp3',
              79: 'D3S.mp3',
              81: 'E3.mp3',
              83: 'F3S.mp3',
              84: 'G3S.mp3',
            }
          },
          Am: {
            notes: [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84],
            audio: {
              60: 'A.mp3',
              62: 'B.mp3',
              64: 'C2.mp3',
              65: 'D2.mp3',
              67: 'E2.mp3',
              69: 'F2.mp3',
              71: 'G2.mp3',
              72: 'A2.mp3',
              74: 'B2.mp3',
              76: 'C3.mp3',
              77: 'D3.mp3',
              79: 'E3.mp3',
              81: 'F3.mp3',
              83: 'G3.mp3',
              84: 'A3.mp3',
            }
          },
          Amsharp: {
            notes: [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84],
            audio: {
              60: 'AS.mp3',
              62: 'C2.mp3',
              64: 'C2S.mp3',
              65: 'D2S.mp3',
              67: 'F2.mp3',
              69: 'F2S.mp3',
              71: 'G2S.mp3',
              72: 'A2S.mp3',
              74: 'C3.mp3',
              76: 'C3S.mp3',
              77: 'D3S.mp3',
              79: 'F3.mp3',
              81: 'F3S.mp3',
              83: 'G3S.mp3',
              84: 'A3S.mp3',
            }
          },
          Bm: {
            notes: [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84],
            audio: {
              60: 'B.mp3',
              62: 'C2S.mp3',
              64: 'D2.mp3',
              65: 'E2.mp3',
              67: 'F2S.mp3',
              69: 'G2.mp3',
              71: 'A2.mp3',
              72: 'B2.mp3',
              74: 'C3S.mp3',
              76: 'D3.mp3',
              77: 'E3.mp3',
              79: 'F3S.mp3',
              81: 'G3.mp3',
              83: 'A3.mp3',
              84: 'B3.mp3',
            }
          },
          
          // Add more scales here
        };
        

navigator.requestMIDIAccess()
  .then(function(access) {
    const input = access.inputs.values().next().value;
    input.onmidimessage = function(event) {
      const note = event.data[1];
      const velocity = event.data[2];
      const key = piano.querySelector(`[data-note="${note}"]`);
      if (key) {
        if (velocity > 0) {
          key.classList.add('active');
          playNote(note, velocity);
        } else {
          key.classList.remove('active');
        }
      }
    }
  })

  function playNote(note, velocity) {
  const scale = document.getElementById('scale-select').value;
  const audioFile = SCALES[scale].audio[note];
  const audio = new Audio(`Audio/${audioFile}`);
  audio.play();
}

<<<<<<< HEAD
export default function totalPhoneBill(callsandsms) {
    let arr=callsandsms.split(',');
      let calls=0;
      let smss=0;
      for (let i=0 ; i<arr.length; i++) {
        let cost=arr[i].trim();
        if (cost.startsWith('call')) {
        calls += 2.75;
        } else if (cost.startsWith('sms')) {
          smss += 0.65;
        }
      }
      let totalcost = calls + smss;
      return 'R' + totalcost.toFixed(2);
=======
export default function totalPhoneBill(callsandsms) {
    let arr=callsandsms.split(',');
      let calls=0;
      let smss=0;
      for (let i=0 ; i<arr.length; i++) {
        let cost=arr[i].trim();
        if (cost.startsWith('call')) {
        calls += 2.75;
        } else if (cost.startsWith('sms')) {
          smss += 0.65;
        }
      }
      let totalcost = calls + smss;
      return 'R' + totalcost.toFixed(2);
>>>>>>> 227300b287c71ad30963110d32032f1bd39c81c2
    }
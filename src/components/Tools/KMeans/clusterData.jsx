const clusterData = [
  ['x', 'y'],
  [3.5978900e-02, 4.4233337e-01],
  [1.9294669e-01, 1.4128984e-01],
  [1.7896478e-01, 4.0775660e-01],
  [3.9697187e-01, -4.1777655e-01],
  [-2.9123800e-03, 5.3764335e-02],
  [1.6426232e-01, 1.5014113e-01],
  [-5.4900313e-01, 3.0777648e-01],
  [-7.4567464e-01, 1.0146798e-01],
  [-5.4222957e-01, 1.1895866e-01],
  [-6.3167442e-01, 2.2338877e-02],
  [-5.8611434e-01, -9.3573829e-02],
  [4.2571791e-01, -4.9343026e-01],
  [1.8050278e-01, 1.6761936e-01],
  [1.7400281e-01, 2.4933234e-01],
  [4.7660777e-01, 1.1877613e-01],
  [4.8512640e-01, -3.5769453e-01],
  [9.0555983e-02, 3.2338229e-01],
  [4.5576258e-01, -2.5533208e-01],
  [4.0629989e-01, -2.2332187e-01],
  [-4.8376027e-01, -3.0370962e-01],
  [-5.5697793e-01, -2.6051287e-02],
  [3.7185123e-01, -4.1188774e-01],
  [1.9807334e-01, 3.1922716e-01],
  [1.6747654e-01, 4.9778719e-01],
  [1.2218657e-01, 1.6876850e-01],
  [-7.3575879e-02, 8.0497261e-02],
  [2.3275584e-01, 3.4818234e-01],
  [4.9346518e-01, -4.4170169e-01],
  [-5.3012620e-02, 2.6993486e-01],
  [-5.7431102e-01, -7.5693018e-02],
  [-6.0497385e-01, 3.8575314e-01],
  [1.1927273e-01, 8.4555283e-02],
  [1.9819519e-01, 5.6227701e-01],
  [3.9949676e-02, 3.2083618e-01],
  [3.3352479e-01, -2.8140767e-01],
  [3.2457679e-01, -3.7888357e-01],
  [4.0125309e-01, -1.8402305e-01],
  [-6.8786134e-01, 1.1190812e-01],
  [9.0246008e-02, 3.9613798e-02],
  [1.6821449e-01, 4.2715683e-01],
  [4.4742796e-01, -3.1090094e-01],
  [3.5934132e-02, 1.6346095e-01],
  [-6.2521747e-01, -4.2597569e-02],
  [6.2715575e-01, -1.7576590e-01],
  [4.3575286e-01, -3.2338407e-01],
  [2.9049750e-01, 4.0564492e-01],
  [1.4007150e-01, 3.7288099e-01],
  [-7.0171654e-01, 9.0619091e-02],
  [4.4793572e-01, -2.7613047e-01],
  [3.7013306e-01, -1.6624317e-01],
  [4.4022065e-01, -1.5022936e-01],
  [-6.8464121e-01, 5.3815235e-02],
  [-6.6634782e-02, 3.2843322e-01],
  [4.9338072e-01, -3.1689116e-01],
  [2.3567081e-01, 1.6186090e-01],
  [4.5070510e-01, -3.2900650e-01],
  [9.3311909e-02, 1.9449776e-01],
  [1.2802359e-01, 2.6916529e-01],
  [-6.1965664e-01, 1.2355314e-01],
  [-7.6248003e-01, 1.3776607e-01],
  [3.7687579e-01, -1.6953088e-01],
  [-4.7279201e-01, 1.0918332e-01],
  [9.3171684e-02, 1.7770066e-01],
  [5.2301663e-01, -3.5185225e-01],
  [5.9190736e-01, -1.2738915e-01],
  [3.9522905e-01, -1.2344860e-01],
  [4.3029816e-01, -2.7695384e-01],
  [5.1438650e-01, -2.8137385e-01],
  [-5.5233942e-01, 7.9200748e-02],
  [-6.8933365e-01, 1.6327546e-01],
  [3.2290856e-01, -2.6573189e-01],
  [-6.2457593e-01, -2.4094720e-01],
  [1.2481710e-01, 3.9509153e-01],
  [3.3093606e-01, -4.5753141e-01],
  [4.3260711e-01, -3.9269494e-01],
  [4.3156823e-01, -2.7524142e-01],
  [3.6471924e-01, -2.7524376e-01],
  [4.9181817e-01, -4.5047789e-01],
  [-5.2068992e-01, 1.9599850e-02],
  [-4.2070287e-01, -3.3754075e-01],
  [-1.3695999e-02, 3.2164635e-01],
  [4.8633410e-02, -3.5307217e-02],
  [-4.8111297e-01, 2.1673783e-01],
  [4.3162021e-01, -4.5630292e-01],
  [4.3263260e-01, -2.5030963e-01],
  [3.1453900e-01, -1.2529402e-01],
  [-5.7355054e-03, 1.7814140e-01],
  [1.0015061e-01, 4.6236520e-01],
  [5.2271853e-01, -2.3100736e-01],
  [-7.8665907e-01, -4.9046746e-02],
  [-7.1244748e-01, -8.3059463e-02],
  [5.0323782e-01, -7.0924497e-02],
  [8.0502485e-02, 2.7091761e-01],
  [3.7097859e-01, -4.4511088e-01],
  [1.8528887e-01, 3.7629874e-02],
  [-6.7487261e-01, -2.4770269e-02],
  [-5.3310568e-01, 1.8835731e-02],
  [1.3186478e-01, 2.7393483e-01],
  [4.0175075e-01, 5.5467971e-01],
  [-6.7075006e-01, -7.9819915e-02],
];

export { clusterData };

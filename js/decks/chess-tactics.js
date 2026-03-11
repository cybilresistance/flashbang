// Chess Tactics — Puzzles sourced from Lichess (CC0)
// Generated 2026-03-11

const cards = [
  {
    "id": "0042j",
    "fen": "3r2k1/4nppp/pq3b2/1p2p3/2r2P2/2P1NR2/PP1Q2BP/3R2K1 w - - 0 25",
    "toMove": "White",
    "bestMove": "Qxd8+",
    "solution": "Qxd8+, Qxd8, Rxd8#",
    "rating": 429,
    "themes": [
      "Back Rank Mate",
      "mate",
      "Mate in 2"
    ],
    "level": 1
  },
  {
    "id": "03P4P",
    "fen": "6k1/p1p3p1/1p3pP1/8/4r3/4P3/P6P/3R2K1 w - - 0 39",
    "toMove": "White",
    "bestMove": "Rd8+",
    "solution": "Rd8+, Re8, Rxe8#",
    "rating": 429,
    "themes": [
      "mate",
      "Mate in 2",
      "rook Endgame"
    ],
    "level": 1
  },
  {
    "id": "03Mld",
    "fen": "5R2/6pp/1kr5/4b3/Q3p3/7P/1P3PP1/6K1 b - - 1 45",
    "toMove": "Black",
    "bestMove": "Rc1+",
    "solution": "Rc1+, Qd1, Rxd1#",
    "rating": 500,
    "themes": [
      "mate",
      "Mate in 2",
      "pillsburys Mate"
    ],
    "level": 1
  },
  {
    "id": "03MIy",
    "fen": "3r1rk1/1p2qpp1/p1b1p2p/8/3PQ3/3B4/PP3PPP/3RR1K1 w - - 3 19",
    "toMove": "White",
    "bestMove": "Qh7#",
    "solution": "Qh7#",
    "rating": 518,
    "themes": [
      "mate",
      "Mate in 1"
    ],
    "level": 1
  },
  {
    "id": "0030b",
    "fen": "6k1/5ppp/5n2/pp6/4b1rP/5N1Q/Pq2r1P1/3R2RK w - - 5 33",
    "toMove": "White",
    "bestMove": "Rd8+",
    "solution": "Rd8+, Ne8, Rxe8#",
    "rating": 565,
    "themes": [
      "Back Rank Mate",
      "mate",
      "Mate in 2"
    ],
    "level": 1
  },
  {
    "id": "002vV",
    "fen": "8/6k1/1R5p/5p1P/5P1K/6P1/8/r7 b - - 3 58",
    "toMove": "Black",
    "bestMove": "Rh1#",
    "solution": "Rh1#",
    "rating": 567,
    "themes": [
      "mate",
      "Mate in 1",
      "rook Endgame"
    ],
    "level": 1
  },
  {
    "id": "00465",
    "fen": "5r1k/pp4pp/2p5/6q1/5R2/2P5/P1P2PPP/3rR1K1 w - - 0 28",
    "toMove": "White",
    "bestMove": "Rxf8#",
    "solution": "Rxf8#",
    "rating": 568,
    "themes": [
      "Back Rank Mate",
      "mate",
      "Mate in 1"
    ],
    "level": 1
  },
  {
    "id": "03M6Y",
    "fen": "3r3k/pp3pp1/5b1p/q1p2B2/3p4/PP1P2P1/2P1QP1P/4R1K1 w - - 3 27",
    "toMove": "White",
    "bestMove": "Qe8+",
    "solution": "Qe8+, Rxe8, Rxe8#",
    "rating": 570,
    "themes": [
      "Kingside Attack",
      "mate",
      "Mate in 2"
    ],
    "level": 1
  },
  {
    "id": "001KR",
    "fen": "6k1/p1p3pp/4N3/1p6/2q1r1n1/2B5/PP4PP/3R1R1K w - - 0 29",
    "toMove": "White",
    "bestMove": "Rf8#",
    "solution": "Rf8#",
    "rating": 581,
    "themes": [
      "mate",
      "Mate in 1"
    ],
    "level": 1
  },
  {
    "id": "03N1y",
    "fen": "4r1k1/1pp2ppp/1b2b3/3q4/Q2Pn3/5N2/4BPPP/B4RK1 w - - 0 18",
    "toMove": "White",
    "bestMove": "Qxe8#",
    "solution": "Qxe8#",
    "rating": 592,
    "themes": [
      "Hanging Piece",
      "Kingside Attack",
      "mate"
    ],
    "level": 1
  },
  {
    "id": "002GQ",
    "fen": "5rk1/5ppp/4p3/4N3/8/1Pn5/5PPP/2R3K1 b - - 1 28",
    "toMove": "Black",
    "bestMove": "Ne2+",
    "solution": "Ne2+, Kf1, Nxc1",
    "rating": 654,
    "themes": [
      "Crushing",
      "Fork"
    ],
    "level": 1
  },
  {
    "id": "03Nb5",
    "fen": "r1b2rk1/ppp2ppp/8/2bP4/7q/1BNQ4/PPP3PP/R1B1R2K b - - 2 15",
    "toMove": "Black",
    "bestMove": "Qxe1+",
    "solution": "Qxe1+, Qf1, Qxf1#",
    "rating": 658,
    "themes": [
      "Hanging Piece",
      "Kingside Attack",
      "mate"
    ],
    "level": 1
  },
  {
    "id": "03P7w",
    "fen": "6k1/5ppp/8/1R1P4/2r5/3n1P1P/6P1/6K1 w - - 0 41",
    "toMove": "White",
    "bestMove": "Rb8+",
    "solution": "Rb8+, Rc8, Rxc8#",
    "rating": 665,
    "themes": [
      "Back Rank Mate",
      "mate",
      "Mate in 2"
    ],
    "level": 1
  },
  {
    "id": "03NKN",
    "fen": "3rk2r/3bbppp/3q4/2Q1R3/3p1P2/2PP4/PP4PP/RNB3K1 b k - 0 19",
    "toMove": "Black",
    "bestMove": "Qxc5",
    "solution": "Qxc5, Rxc5, Bxc5",
    "rating": 688,
    "themes": [
      "Advantage"
    ],
    "level": 1
  },
  {
    "id": "03Mlc",
    "fen": "r5rk/pp3p1p/3p4/3Pn1qQ/4P2R/2N5/PP4PP/6K1 w - - 3 23",
    "toMove": "White",
    "bestMove": "Qxh7#",
    "solution": "Qxh7#",
    "rating": 736,
    "themes": [
      "Kingside Attack",
      "mate",
      "Mate in 1"
    ],
    "level": 1
  },
  {
    "id": "03Omb",
    "fen": "2r3k1/p2qbppp/4p3/2np2r1/3N4/2PQ1P1R/PP4PP/R5K1 w - - 1 22",
    "toMove": "White",
    "bestMove": "Qxh7+",
    "solution": "Qxh7+, Kf8, Qh8#",
    "rating": 765,
    "themes": [
      "Kingside Attack",
      "mate",
      "Mate in 2"
    ],
    "level": 1
  },
  {
    "id": "03PNX",
    "fen": "6k1/1p3ppp/p6q/1pQn4/3P4/4rPP1/1P5P/R5K1 w - - 0 29",
    "toMove": "White",
    "bestMove": "Qc8+",
    "solution": "Qc8+, Re8, Qxe8#",
    "rating": 800,
    "themes": [
      "mate",
      "Mate in 2"
    ],
    "level": 1
  },
  {
    "id": "001gi",
    "fen": "N6r/1p1k1ppp/2np4/b3p3/4P1b1/N1Q5/P4PPP/R3KB1R b KQ - 0 18",
    "toMove": "Black",
    "bestMove": "Bxc3#",
    "solution": "Bxc3#",
    "rating": 819,
    "themes": [
      "boden Mate",
      "Hanging Piece",
      "mate"
    ],
    "level": 1
  },
  {
    "id": "03NwY",
    "fen": "8/8/7p/5p2/7p/r2k2P1/p4PK1/4R3 w - - 2 48",
    "toMove": "White",
    "bestMove": "Re3+",
    "solution": "Re3+, Kc2, Rxa3",
    "rating": 819,
    "themes": [
      "Crushing",
      "rook Endgame",
      "Skewer"
    ],
    "level": 1
  },
  {
    "id": "000rZ",
    "fen": "2kr1b1r/p1p2pp1/2pqN3/7p/6n1/2NPB3/PPP2PPP/R2Q1RK1 b - - 0 13",
    "toMove": "Black",
    "bestMove": "Qxh2#",
    "solution": "Qxh2#",
    "rating": 822,
    "themes": [
      "Kingside Attack",
      "mate",
      "Mate in 1"
    ],
    "level": 1
  },
  {
    "id": "002Q2",
    "fen": "7k/p4R1p/3p3B/2pN1n2/2PbB1b1/3P2P1/P3r3/5R1K b - - 0 28",
    "toMove": "Black",
    "bestMove": "Nxg3#",
    "solution": "Nxg3#",
    "rating": 854,
    "themes": [
      "corner Mate",
      "mate",
      "Mate in 1"
    ],
    "level": 1
  },
  {
    "id": "001pC",
    "fen": "r4rk1/pp3ppp/3b4/2p1pPB1/7N/2PP3n/PP4PP/R2Q2RK b - - 0 18",
    "toMove": "Black",
    "bestMove": "Nf2#",
    "solution": "Nf2#",
    "rating": 876,
    "themes": [
      "mate",
      "Mate in 1",
      "Smothered Mate"
    ],
    "level": 1
  },
  {
    "id": "03MuM",
    "fen": "r2q1rk1/1pp2ppb/2n1pn1p/p7/2PN4/PP1P2PP/1B1QPPB1/R4RK1 b - - 0 16",
    "toMove": "Black",
    "bestMove": "Nxd4",
    "solution": "Nxd4, Bxd4, Qxd4",
    "rating": 877,
    "themes": [
      "Advantage"
    ],
    "level": 1
  },
  {
    "id": "03Naf",
    "fen": "4k3/6R1/p2rp3/4N1p1/1p1Pn1P1/7r/PP6/1K3R2 b - - 1 26",
    "toMove": "Black",
    "bestMove": "Nd2+",
    "solution": "Nd2+, Kc1, Nxf1",
    "rating": 882,
    "themes": [
      "Crushing",
      "Fork"
    ],
    "level": 1
  },
  {
    "id": "03OK7",
    "fen": "3r4/ppb4k/2p2p2/5NRp/3P4/1P3P2/P4P2/7K w - - 0 29",
    "toMove": "White",
    "bestMove": "Rg7+",
    "solution": "Rg7+, Kh8, Rxc7",
    "rating": 894,
    "themes": [
      "Advantage",
      "Fork"
    ],
    "level": 1
  },
  {
    "id": "002p5",
    "fen": "r1bqr1k1/pp1nbpp1/2p5/3n2P1/2BP4/P7/1PQNNPP1/R3K2R w KQ - 1 14",
    "toMove": "White",
    "bestMove": "Qh7+",
    "solution": "Qh7+, Kf8, Qh8#",
    "rating": 908,
    "themes": [
      "Kingside Attack",
      "mate",
      "Mate in 2"
    ],
    "level": 1
  },
  {
    "id": "03PNb",
    "fen": "8/8/8/1R1n4/3kp1P1/8/4K3/8 b - - 0 57",
    "toMove": "Black",
    "bestMove": "Nc3+",
    "solution": "Nc3+, Ke1, Nxb5",
    "rating": 912,
    "themes": [
      "Crushing",
      "Fork"
    ],
    "level": 1
  },
  {
    "id": "001wr",
    "fen": "r4rk1/p3ppbp/Pp1q1np1/3PpbB1/2B5/2N2P2/1PPQ2PP/3RR1K1 b - - 0 18",
    "toMove": "Black",
    "bestMove": "Qc5+",
    "solution": "Qc5+, Kh1, Qxc4",
    "rating": 920,
    "themes": [
      "Advantage",
      "Fork"
    ],
    "level": 1
  },
  {
    "id": "03Nmh",
    "fen": "5R2/8/6p1/4n2p/r3k3/6K1/5P1P/8 w - - 0 51",
    "toMove": "White",
    "bestMove": "Rf4+",
    "solution": "Rf4+, Kd5, Rxa4",
    "rating": 922,
    "themes": [
      "Advantage",
      "Skewer"
    ],
    "level": 1
  },
  {
    "id": "03OKr",
    "fen": "5rk1/4ppb1/p2p3p/3P1Q2/1p1qRP2/3P4/PP4PP/1K1R4 b - - 2 22",
    "toMove": "Black",
    "bestMove": "Qxb2#",
    "solution": "Qxb2#",
    "rating": 924,
    "themes": [
      "mate",
      "Mate in 1",
      "Queenside Attack"
    ],
    "level": 1
  },
  {
    "id": "002CP",
    "fen": "r5k1/pp4pp/4p1q1/4p3/3n4/P3Q1P1/1PP4P/2KR1R2 b - - 5 24",
    "toMove": "Black",
    "bestMove": "Qxc2#",
    "solution": "Qxc2#",
    "rating": 925,
    "themes": [
      "mate",
      "Mate in 1",
      "Queenside Attack"
    ],
    "level": 1
  },
  {
    "id": "03P14",
    "fen": "8/8/5p2/1p4k1/8/P1n1K3/1R6/8 b - - 5 50",
    "toMove": "Black",
    "bestMove": "Nd1+",
    "solution": "Nd1+, Kd4, Nxb2",
    "rating": 934,
    "themes": [
      "Crushing",
      "Fork"
    ],
    "level": 1
  },
  {
    "id": "000o3",
    "fen": "8/2p5/3k2p1/1p1P1p2/1P3P2/3K2Pp/7P/8 w - - 2 44",
    "toMove": "White",
    "bestMove": "Kd4",
    "solution": "Kd4, g5, fxg5",
    "rating": 944,
    "themes": [
      "Crushing",
      "pawn Endgame",
      "Zugzwang"
    ],
    "level": 1
  },
  {
    "id": "03MOh",
    "fen": "7k/2b3p1/q6p/p2Q4/Pp3pP1/1B5P/1P6/6K1 w - - 0 36",
    "toMove": "White",
    "bestMove": "Qg8#",
    "solution": "Qg8#",
    "rating": 944,
    "themes": [
      "mate",
      "Mate in 1"
    ],
    "level": 1
  },
  {
    "id": "03PXc",
    "fen": "1r2Q3/8/3p1p2/p6k/P6P/5PP1/1p4K1/4R3 b - - 0 39",
    "toMove": "Black",
    "bestMove": "Rxe8",
    "solution": "Rxe8, Rxe8, b1=Q, Rh8+, Kg6",
    "rating": 964,
    "themes": [
      "advanced Pawn",
      "Crushing",
      "Promotion"
    ],
    "level": 1
  },
  {
    "id": "002O7",
    "fen": "r3qrk1/2p2pp1/p2bpn1p/2ppN3/3P1Pb1/1PP1P1B1/P2N2PP/R2Q1RK1 w - - 1 15",
    "toMove": "White",
    "bestMove": "Nxg4",
    "solution": "Nxg4, Nxg4, Qxg4",
    "rating": 966,
    "themes": [
      "Crushing"
    ],
    "level": 1
  },
  {
    "id": "03MAa",
    "fen": "1k1r3r/ppp1R2p/8/Q3R3/3p4/3P1p1q/PPP2P2/1K6 w - - 2 26",
    "toMove": "White",
    "bestMove": "Qxc7+",
    "solution": "Qxc7+, Ka8, Qxb7#",
    "rating": 976,
    "themes": [
      "mate",
      "Mate in 2",
      "Queenside Attack"
    ],
    "level": 1
  },
  {
    "id": "003jb",
    "fen": "r3kb1r/p4ppp/b3p3/2pq4/3Q4/4BN2/PPP2PPP/R3K2R w KQkq - 0 12",
    "toMove": "White",
    "bestMove": "Qa4+",
    "solution": "Qa4+, Bb5, Qxb5+",
    "rating": 980,
    "themes": [
      "Crushing",
      "Fork"
    ],
    "level": 1
  },
  {
    "id": "003Jb",
    "fen": "6k1/Q2bqr1p/2rpp1pR/p7/Pp2P3/1B3P2/1PP3P1/2KR4 b - - 7 22",
    "toMove": "Black",
    "bestMove": "Qg5+",
    "solution": "Qg5+, Kb1, Qxh6",
    "rating": 993,
    "themes": [
      "Advantage",
      "Fork"
    ],
    "level": 1
  },
  {
    "id": "002Mm",
    "fen": "rn1qrk2/ppp3pQ/3p1pP1/3Pp3/2P1P3/8/PP3PP1/R1B1K3 w Q - 3 17",
    "toMove": "White",
    "bestMove": "Qh8+",
    "solution": "Qh8+, Ke7, Qxg7#",
    "rating": 995,
    "themes": [
      "Deflection",
      "mate",
      "Mate in 2"
    ],
    "level": 1
  },
  {
    "id": "003o0",
    "fen": "r1bqk2r/pp1nbppp/3p4/1B1p4/3P1B2/5N2/PPP2PPP/R2QK2R b KQkq - 3 9",
    "toMove": "Black",
    "bestMove": "Qa5+",
    "solution": "Qa5+, Qd2, Qxb5",
    "rating": 1003,
    "themes": [
      "Advantage",
      "Fork"
    ],
    "level": 2
  },
  {
    "id": "03NHo",
    "fen": "8/6p1/5p1p/4n3/6kP/4R1P1/2PK4/8 b - - 6 43",
    "toMove": "Black",
    "bestMove": "Nc4+",
    "solution": "Nc4+, Ke2, Nxe3, Kxe3, Kxg3",
    "rating": 1006,
    "themes": [
      "Advantage",
      "Fork"
    ],
    "level": 2
  },
  {
    "id": "003jv",
    "fen": "7R/1p2k2p/p2n2p1/4K3/8/6P1/P6P/8 b - - 11 37",
    "toMove": "Black",
    "bestMove": "Nf7+",
    "solution": "Nf7+, Ke4, Nxh8",
    "rating": 1007,
    "themes": [
      "Crushing",
      "Fork"
    ],
    "level": 2
  },
  {
    "id": "001om",
    "fen": "5r1k/pp4pp/5p2/1BbQp1r1/7K/7P/1PP3P1/3R3R b - - 3 26",
    "toMove": "Black",
    "bestMove": "Bf2+",
    "solution": "Bf2+, g3, Bxg3#",
    "rating": 1018,
    "themes": [
      "mate",
      "Mate in 2",
      "morphys Mate"
    ],
    "level": 2
  },
  {
    "id": "003AX",
    "fen": "2r2rk1/5ppp/bq2p3/p2pP1N1/Pb1p2P1/1P2P2P/2QN4/2R1K2R w K - 0 19",
    "toMove": "White",
    "bestMove": "Qxh7#",
    "solution": "Qxh7#",
    "rating": 1035,
    "themes": [
      "Kingside Attack",
      "mate",
      "Mate in 1"
    ],
    "level": 2
  },
  {
    "id": "001w5",
    "fen": "1rb3k1/q4rP1/4p2p/3p3p/3P1P2/2P5/2QK3P/3R2R1 w - - 1 30",
    "toMove": "White",
    "bestMove": "Qh7+",
    "solution": "Qh7+, Kxh7, g8=Q#",
    "rating": 1039,
    "themes": [
      "advanced Pawn",
      "Attraction",
      "mate"
    ],
    "level": 2
  },
  {
    "id": "03N1l",
    "fen": "b1r3k1/4Rppp/p1q1p3/1p6/8/1P2P2P/PB2QPP1/1B4K1 b - - 0 24",
    "toMove": "Black",
    "bestMove": "Qxg2#",
    "solution": "Qxg2#",
    "rating": 1040,
    "themes": [
      "Kingside Attack",
      "mate",
      "Mate in 1"
    ],
    "level": 2
  },
  {
    "id": "003YF",
    "fen": "r4rk1/1pp2ppp/p2p4/2bPp3/2P1PB1q/P1N2B2/1P3P2/R2QK1R1 b Q - 0 15",
    "toMove": "Black",
    "bestMove": "Qxf2#",
    "solution": "Qxf2#",
    "rating": 1054,
    "themes": [
      "Attacking f2/f7",
      "mate",
      "Mate in 1"
    ],
    "level": 2
  },
  {
    "id": "003jH",
    "fen": "rn3rk1/p5pp/3N4/4np1q/5Q2/1P6/PB1P1KP1/2R4R b - - 1 25",
    "toMove": "Black",
    "bestMove": "Nd3+",
    "solution": "Nd3+, Ke3, Nxf4, Rxh5, Nxh5",
    "rating": 1065,
    "themes": [
      "Crushing",
      "Fork"
    ],
    "level": 2
  },
  {
    "id": "03Nhj",
    "fen": "6k1/1p3pp1/p6p/4Q3/1P2P3/2P2K2/7q/3RR3 b - - 0 29",
    "toMove": "Black",
    "bestMove": "Qxe5",
    "solution": "Qxe5, Rd8+, Kh7",
    "rating": 1071,
    "themes": [
      "Advantage",
      "Hanging Piece"
    ],
    "level": 2
  },
  {
    "id": "0039T",
    "fen": "1r5r/p3kp2/4p2p/4P3/R4Pp1/6P1/P1P4P/4K2R b K - 2 25",
    "toMove": "Black",
    "bestMove": "Rb1+",
    "solution": "Rb1+, Kf2, Rxh1, Rxa7+, Kf8",
    "rating": 1072,
    "themes": [
      "Crushing",
      "Defensive Move",
      "rook Endgame"
    ],
    "level": 2
  },
  {
    "id": "03MPp",
    "fen": "2Q2r1k/1p4pp/p3Q3/8/3q3P/6P1/1P3RB1/5bK1 b - - 0 31",
    "toMove": "Black",
    "bestMove": "Qxf2+",
    "solution": "Qxf2+, Kh2, Qxg2#",
    "rating": 1076,
    "themes": [
      "mate",
      "Mate in 2"
    ],
    "level": 2
  },
  {
    "id": "001xl",
    "fen": "8/4R3/p4kpp/3B4/5q2/8/5P1P/6K1 w - - 6 41",
    "toMove": "White",
    "bestMove": "Rf7+",
    "solution": "Rf7+, Ke5, Rxf4",
    "rating": 1094,
    "themes": [
      "Advantage",
      "Skewer"
    ],
    "level": 2
  },
  {
    "id": "003IM",
    "fen": "8/5kp1/p3pb2/8/6Pp/1P4qP/P2R2Q1/7K b - - 3 34",
    "toMove": "Black",
    "bestMove": "Qe1+",
    "solution": "Qe1+, Qg1, Qxd2",
    "rating": 1096,
    "themes": [
      "Crushing",
      "Deflection"
    ],
    "level": 2
  },
  {
    "id": "002HE",
    "fen": "1qr2rk1/1p1p1ppp/pB2p1n1/7n/2P1P3/1Q2NP1P/PP2BKPb/3R1R2 b - - 2 20",
    "toMove": "Black",
    "bestMove": "Qg3#",
    "solution": "Qg3#",
    "rating": 1101,
    "themes": [
      "mate",
      "Mate in 1"
    ],
    "level": 2
  },
  {
    "id": "0009B",
    "fen": "r2qr1k1/b1p2ppp/p5n1/P1p1p3/4P1n1/B2P2Pb/3NBP1P/RN1QR1K1 w - - 0 17",
    "toMove": "White",
    "bestMove": "Bxg4",
    "solution": "Bxg4, Bxg4, Qxg4",
    "rating": 1103,
    "themes": [
      "Advantage"
    ],
    "level": 2
  },
  {
    "id": "003r5",
    "fen": "r2qr1k1/ppp2ppp/4P3/8/1nP2Q2/2N2N1P/PP3KP1/R4R2 b - - 0 15",
    "toMove": "Black",
    "bestMove": "Nd3+",
    "solution": "Nd3+, Kg1, Nxf4",
    "rating": 1107,
    "themes": [
      "Crushing",
      "Fork"
    ],
    "level": 2
  },
  {
    "id": "000rO",
    "fen": "3R4/8/8/KB2b3/1p6/1P2k3/3p4/8 b - - 0 58",
    "toMove": "Black",
    "bestMove": "Bc7+",
    "solution": "Bc7+, Kxb4, Bxd8",
    "rating": 1110,
    "themes": [
      "Crushing",
      "Fork"
    ],
    "level": 2
  },
  {
    "id": "002bK",
    "fen": "8/7p/4k3/pb1p1pPB/1n1P3P/N1p1P3/4K3/8 w - - 2 43",
    "toMove": "White",
    "bestMove": "Nxb5",
    "solution": "Nxb5, c2, Kd2",
    "rating": 1114,
    "themes": [
      "Advantage",
      "Hanging Piece"
    ],
    "level": 2
  },
  {
    "id": "001Wz",
    "fen": "6k1/5ppp/r1p5/p1n1rP2/8/2P2N1P/2P3P1/3R2K1 w - - 0 22",
    "toMove": "White",
    "bestMove": "Rd8+",
    "solution": "Rd8+, Re8, Rxe8#",
    "rating": 1118,
    "themes": [
      "Back Rank Mate",
      "mate",
      "Mate in 2"
    ],
    "level": 2
  },
  {
    "id": "003eP",
    "fen": "6k1/r1b1q3/2p3p1/2Pp4/1P2p1n1/2B1P3/NQ6/2K4R w - - 2 37",
    "toMove": "White",
    "bestMove": "Rh8+",
    "solution": "Rh8+, Kf7, Rh7+, Ke8, Rxe7+",
    "rating": 1156,
    "themes": [
      "Crushing",
      "Exposed King",
      "Skewer"
    ],
    "level": 2
  },
  {
    "id": "03Msh",
    "fen": "3r2r1/2p2R2/3p4/1p6/p5k1/P1P5/1P3K2/4R3 w - - 2 43",
    "toMove": "White",
    "bestMove": "Rg1+",
    "solution": "Rg1+, Kh5, Rh7#",
    "rating": 1182,
    "themes": [
      "mate",
      "Mate in 2",
      "rook Endgame"
    ],
    "level": 2
  },
  {
    "id": "001wR",
    "fen": "6nr/p4p1p/k1p5/1p6/1QN5/2P1P3/4KPqP/8 w - - 0 27",
    "toMove": "White",
    "bestMove": "Qa5+",
    "solution": "Qa5+, Kb7, Nd6+, Kb8, Qd8#",
    "rating": 1184,
    "themes": [
      "mate",
      "Mate in 3"
    ],
    "level": 2
  },
  {
    "id": "002IE",
    "fen": "r3brk1/5pp1/p2qpn1p/P2pn3/2pP4/2P1PN2/5PPP/RB1QK2R w KQ - 0 17",
    "toMove": "White",
    "bestMove": "dxe5",
    "solution": "dxe5, Qe7, exf6",
    "rating": 1205,
    "themes": [
      "Advantage",
      "Fork"
    ],
    "level": 2
  },
  {
    "id": "001wb",
    "fen": "r3k2r/pb1p1ppp/1b4q1/1Q2P3/8/2NP1PP1/PP4P1/R1B2R1K b kq - 0 17",
    "toMove": "Black",
    "bestMove": "Qh5#",
    "solution": "Qh5#",
    "rating": 1211,
    "themes": [
      "mate",
      "Mate in 1"
    ],
    "level": 2
  },
  {
    "id": "03MzW",
    "fen": "r7/p3Qp1k/5n1r/3p4/4p3/P1P3R1/2P1KPP1/q7 w - - 0 27",
    "toMove": "White",
    "bestMove": "Qxf7+",
    "solution": "Qxf7+, Kh8, Qg7#",
    "rating": 1222,
    "themes": [
      "mate",
      "Mate in 2"
    ],
    "level": 2
  },
  {
    "id": "002Z9",
    "fen": "4r1k1/1p2R1p1/p2p2Pp/P1pP4/8/1R3p2/1P1q3P/5B1K w - - 0 35",
    "toMove": "White",
    "bestMove": "Rxe8#",
    "solution": "Rxe8#",
    "rating": 1231,
    "themes": [
      "Hanging Piece",
      "mate",
      "Mate in 1"
    ],
    "level": 2
  },
  {
    "id": "03N75",
    "fen": "r5k1/P4ppp/3Qp3/r2p4/2n5/7P/5PP1/6K1 w - - 3 32",
    "toMove": "White",
    "bestMove": "Qb8+",
    "solution": "Qb8+, Rxb8, axb8=Q#",
    "rating": 1252,
    "themes": [
      "advanced Pawn",
      "Back Rank Mate",
      "mate"
    ],
    "level": 2
  },
  {
    "id": "03MPv",
    "fen": "2rr2k1/1p3pp1/p3p2p/5q2/4p1Q1/P1P3RP/1P3PP1/4R1K1 w - - 4 29",
    "toMove": "White",
    "bestMove": "Qxg7#",
    "solution": "Qxg7#",
    "rating": 1275,
    "themes": [
      "Kingside Attack",
      "mate",
      "Mate in 1"
    ],
    "level": 2
  },
  {
    "id": "003nQ",
    "fen": "6rk/pp6/2n5/3ppn1p/3p4/2P2P1q/PP3QNB/R5RK b - - 3 29",
    "toMove": "Black",
    "bestMove": "Ng3+",
    "solution": "Ng3+, Qxg3, Rxg3",
    "rating": 1287,
    "themes": [
      "Crushing",
      "Kingside Attack",
      "Pin"
    ],
    "level": 2
  },
  {
    "id": "03NVE",
    "fen": "4r1k1/1Q3ppp/p4q2/2Rp4/3Pr3/6P1/PP3PP1/3R2K1 b - - 0 23",
    "toMove": "Black",
    "bestMove": "Re1+",
    "solution": "Re1+, Rxe1, Rxe1+, Kh2, Qh6#",
    "rating": 1300,
    "themes": [
      "mate",
      "Mate in 3"
    ],
    "level": 2
  },
  {
    "id": "03NfN",
    "fen": "2b3k1/6p1/p1p1p2p/4Qp1N/6Pq/P4P1P/1P1r4/R5K1 w - - 1 33",
    "toMove": "White",
    "bestMove": "Qxg7#",
    "solution": "Qxg7#",
    "rating": 1302,
    "themes": [
      "mate",
      "Mate in 1"
    ],
    "level": 2
  },
  {
    "id": "0040n",
    "fen": "r7/p2k1pp1/p1p1pn2/3p4/3P4/P3PQp1/1PP2P1R/2K5 b - - 0 20",
    "toMove": "Black",
    "bestMove": "gxh2",
    "solution": "gxh2, Qh3, Ng4",
    "rating": 1333,
    "themes": [
      "advanced Pawn",
      "Advantage"
    ],
    "level": 2
  },
  {
    "id": "003S3",
    "fen": "1r3k1r/pNqnppb1/6pn/2p3Np/7P/2P2Q2/PP3PP1/R1B1K2R w KQ - 3 16",
    "toMove": "White",
    "bestMove": "Ne6+",
    "solution": "Ne6+, Kg8, Nxc7",
    "rating": 1348,
    "themes": [
      "Advantage",
      "Pin"
    ],
    "level": 2
  },
  {
    "id": "0008Q",
    "fen": "8/5R2/1p2P3/p4r2/P6p/1P3Pk1/4K3/8 b - - 2 64",
    "toMove": "Black",
    "bestMove": "Re5+",
    "solution": "Re5+, Kf1, Rxe6",
    "rating": 1356,
    "themes": [
      "Advantage",
      "rook Endgame"
    ],
    "level": 2
  },
  {
    "id": "000Zo",
    "fen": "4r3/1k6/pp3P2/1b5p/3R1p2/P1R2P2/1P4PP/6K1 b - - 0 35",
    "toMove": "Black",
    "bestMove": "Re1+",
    "solution": "Re1+, Kf2, Rf1#",
    "rating": 1376,
    "themes": [
      "mate",
      "Mate in 2",
      "Opera Mate"
    ],
    "level": 2
  },
  {
    "id": "003mh",
    "fen": "4rk1r/1pp2p2/p2p3p/3N4/3P2q1/8/PPP5/1K2Q1NR w - - 2 24",
    "toMove": "White",
    "bestMove": "Qxe8+",
    "solution": "Qxe8+, Kxe8, Nf6+, Ke7, Nxg4",
    "rating": 1378,
    "themes": [
      "Advantage",
      "Attraction",
      "Fork"
    ],
    "level": 2
  },
  {
    "id": "03NYL",
    "fen": "r5k1/pp3ppp/2p1r3/2n1P3/8/1P2R2q/PBP2P1N/R2Q2K1 b - - 3 20",
    "toMove": "Black",
    "bestMove": "Rg6+",
    "solution": "Rg6+, Rg3, Rxg3+, fxg3, Qxg3+, Kh1, Ne4",
    "rating": 1378,
    "themes": [
      "Advantage",
      "Defensive Move",
      "Kingside Attack"
    ],
    "level": 2
  },
  {
    "id": "000lC",
    "fen": "3r3r/pQNk1ppp/1qnR1n2/1B6/8/8/PPP3PP/5R1K b - - 0 19",
    "toMove": "Black",
    "bestMove": "Kxd6",
    "solution": "Kxd6, Qxb6, axb6",
    "rating": 1394,
    "themes": [
      "Advantage",
      "Hanging Piece"
    ],
    "level": 2
  },
  {
    "id": "03MHj",
    "fen": "8/Q4ppk/8/1q1p4/3P3p/2P5/2N5/2K5 b - - 1 45",
    "toMove": "Black",
    "bestMove": "Qf1+",
    "solution": "Qf1+, Kb2, h3",
    "rating": 1396,
    "themes": [
      "Advantage"
    ],
    "level": 2
  },
  {
    "id": "03NBG",
    "fen": "3r1rk1/p6p/5Q2/q1p1Pp2/4b3/1PP1R3/P6P/R5K1 w - - 7 30",
    "toMove": "White",
    "bestMove": "Rg3#",
    "solution": "Rg3#",
    "rating": 1409,
    "themes": [
      "mate",
      "Mate in 1"
    ],
    "level": 3
  },
  {
    "id": "03MvE",
    "fen": "r2q1rk1/ppp1bpp1/2n1b2p/3nP3/2B5/2N2N2/PPP1QPPP/R1BR2K1 b - - 6 10",
    "toMove": "Black",
    "bestMove": "Nxc3",
    "solution": "Nxc3, bxc3, Bxc4",
    "rating": 1410,
    "themes": [
      "Advantage",
      "Discovered Attack"
    ],
    "level": 3
  },
  {
    "id": "000aY",
    "fen": "r4rk1/pp2Bppp/2n1b3/q1pp4/8/P1Q2NP1/1PP1PP1P/2KR3R b - - 1 15",
    "toMove": "Black",
    "bestMove": "Qxc3",
    "solution": "Qxc3, bxc3, Nxe7",
    "rating": 1414,
    "themes": [
      "Advantage"
    ],
    "level": 3
  },
  {
    "id": "03MpQ",
    "fen": "3R4/p5kp/1p3prq/2b1p1n1/5p2/2B2P2/PPP1Q1PP/3R3K b - - 18 30",
    "toMove": "Black",
    "bestMove": "Qxh2+",
    "solution": "Qxh2+, Kxh2, Rh6#",
    "rating": 1444,
    "themes": [
      "Attraction",
      "Kingside Attack",
      "mate"
    ],
    "level": 3
  },
  {
    "id": "0000D",
    "fen": "5rk1/1p3ppp/pq1Q1b2/8/8/1P3N2/P4PPP/3R2K1 b - - 3 27",
    "toMove": "Black",
    "bestMove": "Rd8",
    "solution": "Rd8, Qxd8+, Bxd8",
    "rating": 1455,
    "themes": [
      "Advantage"
    ],
    "level": 3
  },
  {
    "id": "001m3",
    "fen": "7r/6k1/2b1Rp2/8/P1N3p1/5nP1/5P2/Q4K2 b - - 0 38",
    "toMove": "Black",
    "bestMove": "Rh1+",
    "solution": "Rh1+, Ke2, Rxa1",
    "rating": 1459,
    "themes": [
      "Advantage",
      "Skewer"
    ],
    "level": 3
  },
  {
    "id": "002VP",
    "fen": "8/6p1/2B2n2/3b2k1/3B4/6K1/4P3/8 w - - 5 45",
    "toMove": "White",
    "bestMove": "Bxf6+",
    "solution": "Bxf6+, Kf5, Bxd5",
    "rating": 1469,
    "themes": [
      "Crushing"
    ],
    "level": 3
  },
  {
    "id": "03Myn",
    "fen": "6k1/5pp1/p2p3p/2bN4/2p1rP2/P6K/1P1Q2R1/5q2 w - - 0 46",
    "toMove": "White",
    "bestMove": "Nf6+",
    "solution": "Nf6+, Kf8, Nxe4, Qf3+, Ng3",
    "rating": 1472,
    "themes": [
      "Advantage",
      "Defensive Move",
      "Pin"
    ],
    "level": 3
  },
  {
    "id": "001Fg",
    "fen": "5r1k/pQR3pp/5rp1/3B4/q2n4/7P/P4PP1/5RK1 b - - 4 30",
    "toMove": "Black",
    "bestMove": "Ne2+",
    "solution": "Ne2+, Kh2, Qf4+, Kh1, Ng3+, fxg3, Qxf1+",
    "rating": 1474,
    "themes": [
      "Advantage"
    ],
    "level": 3
  },
  {
    "id": "003UW",
    "fen": "8/6pk/7p/2pq4/3p4/5PP1/P3QK1P/8 w - - 2 41",
    "toMove": "White",
    "bestMove": "Qe4+",
    "solution": "Qe4+, Qxe4, fxe4",
    "rating": 1476,
    "themes": [
      "Advantage",
      "queen Endgame"
    ],
    "level": 3
  },
  {
    "id": "000Sa",
    "fen": "2Q2bk1/5p1p/p5p1/2p3P1/4B3/7P/qPr2P2/2K4R w - - 0 33",
    "toMove": "White",
    "bestMove": "Bxc2",
    "solution": "Bxc2, Qa1+, Bb1",
    "rating": 1481,
    "themes": [
      "Advantage"
    ],
    "level": 3
  },
  {
    "id": "03MCw",
    "fen": "r4rk1/1b3pp1/2n1p3/q2pPP1p/p1pP2nN/P1P2QP1/2BN2P1/R4RK1 b - - 2 20",
    "toMove": "Black",
    "bestMove": "Nxd4",
    "solution": "Nxd4, cxd4, Qxd2",
    "rating": 1501,
    "themes": [
      "Crushing"
    ],
    "level": 3
  },
  {
    "id": "03M1K",
    "fen": "r1bq1rk1/pp2B1pp/2n1p3/2p5/3pn3/3P1N2/PPPQBPPP/R3K2R b KQ - 0 11",
    "toMove": "Black",
    "bestMove": "Nxd2",
    "solution": "Nxd2, Bxd8, Nxf3+",
    "rating": 1511,
    "themes": [
      "Crushing"
    ],
    "level": 3
  },
  {
    "id": "003Tx",
    "fen": "2r5/pR5p/5p1k/4p3/4R3/B4nPP/PP3P2/1K6 b - - 0 27",
    "toMove": "Black",
    "bestMove": "Nd2+",
    "solution": "Nd2+, Ka1, Rc1#",
    "rating": 1517,
    "themes": [
      "Back Rank Mate",
      "Fork",
      "mate"
    ],
    "level": 3
  },
  {
    "id": "000Pw",
    "fen": "6k1/5p1p/4p3/4q3/3n4/2Q3P1/PP1N1P1P/6K1 b - - 3 37",
    "toMove": "Black",
    "bestMove": "Ne2+",
    "solution": "Ne2+, Kf1, Nxc3",
    "rating": 1542,
    "themes": [
      "Crushing",
      "Fork"
    ],
    "level": 3
  },
  {
    "id": "002Uy",
    "fen": "8/8/1p6/k7/P7/1KR4r/8/8 b - - 27 64",
    "toMove": "Black",
    "bestMove": "Rxc3+",
    "solution": "Rxc3+, Kxc3, Kxa4, Kb2, Kb4",
    "rating": 1557,
    "themes": [
      "Crushing",
      "Defensive Move",
      "rook Endgame"
    ],
    "level": 3
  },
  {
    "id": "002uV",
    "fen": "r2r2k1/1p2qppp/2n1p3/5Q2/p2P4/P4N2/BP3PPP/2R1R1K1 b - - 0 20",
    "toMove": "Black",
    "bestMove": "exf5",
    "solution": "exf5, Rxe7, Nxe7",
    "rating": 1562,
    "themes": [
      "Advantage"
    ],
    "level": 3
  },
  {
    "id": "002Tf",
    "fen": "r3kbnr/ppp1qppp/2n5/1B1pP3/5B2/4PQ2/PPP2PPP/RN2K2R b KQkq - 2 7",
    "toMove": "Black",
    "bestMove": "Qb4+",
    "solution": "Qb4+, Nc3, Qxb2",
    "rating": 1564,
    "themes": [
      "Advantage",
      "Fork"
    ],
    "level": 3
  },
  {
    "id": "0017R",
    "fen": "r2qk2r/pp2ppbp/1n1p2p1/3P4/2n5/2NBBP1P/PP3P2/R2QK2R w KQkq - 0 13",
    "toMove": "White",
    "bestMove": "Bxc4",
    "solution": "Bxc4, Nxc4, Qa4+, Qd7, Qxc4",
    "rating": 1578,
    "themes": [
      "Advantage",
      "Fork"
    ],
    "level": 3
  },
  {
    "id": "001cr",
    "fen": "8/3B2pp/p5k1/6P1/1ppp1K2/8/1P6/8 w - - 0 39",
    "toMove": "White",
    "bestMove": "Be8#",
    "solution": "Be8#",
    "rating": 1584,
    "themes": [
      "bishop Endgame",
      "mate",
      "Mate in 1"
    ],
    "level": 3
  },
  {
    "id": "03NZY",
    "fen": "2kr3r/1pp1B1pn/p2q4/4pp1p/3n4/3P1B1P/PPP1NPP1/R2QR1K1 b - - 0 20",
    "toMove": "Black",
    "bestMove": "Nxf3+",
    "solution": "Nxf3+, gxf3, Qxe7",
    "rating": 1591,
    "themes": [
      "Advantage",
      "Intermezzo"
    ],
    "level": 3
  },
  {
    "id": "000Vc",
    "fen": "8/8/4k1p1/2KpP2P/5P2/8/8/8 b - - 0 53",
    "toMove": "Black",
    "bestMove": "gxh5",
    "solution": "gxh5, f5+, Kxe5, f6, Kxf6",
    "rating": 1592,
    "themes": [
      "Crushing",
      "pawn Endgame"
    ],
    "level": 3
  },
  {
    "id": "03MDl",
    "fen": "4r3/ppR3p1/3pq1k1/4prp1/8/1P1Q3P/P6P/5R1K w - - 10 33",
    "toMove": "White",
    "bestMove": "Rxf5",
    "solution": "Rxf5, Qxf5, Rxg7+, Kf6, Rf7+, Kxf7, Qxf5+",
    "rating": 1616,
    "themes": [
      "Attraction",
      "Crushing",
      "Deflection"
    ],
    "level": 3
  },
  {
    "id": "002Hv",
    "fen": "8/8/8/6p1/5N2/3p3P/5kP1/3K4 b - - 0 56",
    "toMove": "Black",
    "bestMove": "gxf4",
    "solution": "gxf4, h4, Kxg2, h5, f3, Kd2, f2",
    "rating": 1621,
    "themes": [
      "advanced Pawn",
      "Crushing"
    ],
    "level": 3
  },
  {
    "id": "002KJ",
    "fen": "r3k2r/ppq1bppp/4pn2/2Ppn3/1P4bP/2P2N2/P3BPP1/RNBQ1RK1 w kq - 3 11",
    "toMove": "White",
    "bestMove": "Nxe5",
    "solution": "Nxe5, Qxe5, Bxg4",
    "rating": 1642,
    "themes": [
      "Crushing",
      "Discovered Attack"
    ],
    "level": 3
  },
  {
    "id": "03McI",
    "fen": "rn2k1qr/p3bbp1/2p2nQp/1p2N3/3P4/1P6/P1P2PPP/R1B1R1K1 w kq - 6 16",
    "toMove": "White",
    "bestMove": "Nxf7",
    "solution": "Nxf7, Qxf7, Rxe7+, Kxe7, Ba3+, Kd8, Qxf7",
    "rating": 1643,
    "themes": [
      "Attacking f2/f7",
      "Attraction",
      "Crushing"
    ],
    "level": 3
  },
  {
    "id": "002Ua",
    "fen": "r4rk1/pp3ppp/3p1q2/P1P1p3/2B5/2B2n2/2P2P1P/R2Q1R1K b - - 1 16",
    "toMove": "Black",
    "bestMove": "Qf4",
    "solution": "Qf4, Qxf3, Qxf3+",
    "rating": 1659,
    "themes": [
      "Crushing",
      "Kingside Attack"
    ],
    "level": 3
  },
  {
    "id": "03MaL",
    "fen": "r5k1/5pp1/1pp2qp1/8/rP2R3/2P1P2P/2Q2PP1/4R1K1 b - - 0 28",
    "toMove": "Black",
    "bestMove": "Ra2",
    "solution": "Ra2, Re8+, Kh7, Qxa2, Rxa2",
    "rating": 1663,
    "themes": [
      "Advantage"
    ],
    "level": 3
  },
  {
    "id": "003if",
    "fen": "8/1q3kpp/1P2p3/4Q3/5P2/4B2P/2r3PK/8 w - - 1 44",
    "toMove": "White",
    "bestMove": "Qh5+",
    "solution": "Qh5+, Ke7, Bc5+, Rxc5, Qxc5+",
    "rating": 1664,
    "themes": [
      "Advantage"
    ],
    "level": 3
  },
  {
    "id": "000hf",
    "fen": "r1bq3r/pp1nbkp1/2p1p2p/8/2BP4/1PN3P1/P3QP1P/3R1RK1 w - - 0 20",
    "toMove": "White",
    "bestMove": "Qxe6+",
    "solution": "Qxe6+, Kf8, Qf7#",
    "rating": 1670,
    "themes": [
      "mate",
      "Mate in 2"
    ],
    "level": 3
  },
  {
    "id": "001XA",
    "fen": "2r2rk1/pbq1bppp/8/8/2p1N3/P1Bn2P1/2Q2PBP/1R3RK1 w - - 4 24",
    "toMove": "White",
    "bestMove": "Rxb7",
    "solution": "Rxb7, Qxb7, Nf6+, Bxf6, Bxb7",
    "rating": 1686,
    "themes": [
      "Crushing",
      "Discovered Attack",
      "Sacrifice"
    ],
    "level": 3
  },
  {
    "id": "03Njs",
    "fen": "6rr/4qp2/p1p2k2/8/4p1Q1/6R1/PP3PPP/6K1 w - - 4 33",
    "toMove": "White",
    "bestMove": "Qf4+",
    "solution": "Qf4+, Ke6, Qxe4+, Kd7, Rd3+, Ke8, Qxc6+",
    "rating": 1701,
    "themes": [
      "Advantage",
      "Deflection",
      "Exposed King"
    ],
    "level": 3
  },
  {
    "id": "003IX",
    "fen": "8/3pk3/R7/1R2PK1p/2PPn1r1/8/8/8 b - - 0 43",
    "toMove": "Black",
    "bestMove": "Ng3#",
    "solution": "Ng3#",
    "rating": 1730,
    "themes": [
      "mate",
      "Mate in 1"
    ],
    "level": 3
  },
  {
    "id": "001xO",
    "fen": "k1r1b3/p1r1nppp/Bp1qpn2/2Np4/1P1P4/PQR1PN2/5PPP/2R3K1 b - - 1 19",
    "toMove": "Black",
    "bestMove": "bxc5",
    "solution": "bxc5, Bxc8, c4",
    "rating": 1766,
    "themes": [
      "Crushing",
      "Sacrifice"
    ],
    "level": 3
  },
  {
    "id": "0047P",
    "fen": "8/1N3k2/6p1/8/2P3P1/pr6/R7/5K2 b - - 2 56",
    "toMove": "Black",
    "bestMove": "Rb1+",
    "solution": "Rb1+, Ke2, Rb2+, Kd1, Rxa2",
    "rating": 1766,
    "themes": [
      "Crushing",
      "Exposed King",
      "Fork"
    ],
    "level": 3
  },
  {
    "id": "03Mqr",
    "fen": "1r1q1rk1/p2bbpp1/2ppp2p/8/3Nn2B/2N3R1/PPP2PPP/R2Q2K1 w - - 0 14",
    "toMove": "White",
    "bestMove": "Bxe7",
    "solution": "Bxe7, Qxe7, Nxe4",
    "rating": 1776,
    "themes": [
      "Advantage",
      "Intermezzo"
    ],
    "level": 3
  },
  {
    "id": "0018P",
    "fen": "5R2/1p6/p1p1k3/2P1r3/2K3p1/2P1p1P1/1P5P/8 w - - 2 45",
    "toMove": "White",
    "bestMove": "Re8+",
    "solution": "Re8+, Kf5, Rxe5+, Kxe5, Kd3, Kd5, Kxe3, a5, Kf4, Kc4, Kxg4",
    "rating": 1778,
    "themes": [
      "Crushing",
      "Exposed King",
      "rook Endgame"
    ],
    "level": 3
  },
  {
    "id": "03NcI",
    "fen": "2r2r1k/pbq1Q1pp/1p1p1n2/8/3P4/2P5/PP1B1PPP/1BR1R1K1 b - - 0 18",
    "toMove": "Black",
    "bestMove": "Qc6",
    "solution": "Qc6, f3, Rce8, Qxf8+, Rxf8",
    "rating": 1779,
    "themes": [
      "Advantage",
      "Trapped Piece"
    ],
    "level": 3
  },
  {
    "id": "001h8",
    "fen": "2r3k1/2r4p/4p1p1/1p1q1pP1/p2P1P1Q/P6R/4bB2/2R3K1 w - - 6 35",
    "toMove": "White",
    "bestMove": "Qxh7+",
    "solution": "Qxh7+, Rxh7, Rxc8+, Kg7, Rc7+",
    "rating": 1780,
    "themes": [
      "Crushing",
      "Deflection",
      "Kingside Attack"
    ],
    "level": 3
  },
  {
    "id": "002rd",
    "fen": "r6k/q1p2p1p/1b2bPr1/p1ppP2Q/3P2p1/4B3/PP2NRPP/3R2K1 w - - 2 26",
    "toMove": "White",
    "bestMove": "Nf4",
    "solution": "Nf4, cxd4, Nxg6+, fxg6, Qh6",
    "rating": 1795,
    "themes": [
      "Crushing",
      "Kingside Attack",
      "Pin"
    ],
    "level": 3
  },
  {
    "id": "00143",
    "fen": "r4rk1/5ppp/1np2q2/p1b5/2p1B3/P7/1P3PPP/R1BQ1RK1 w - - 2 18",
    "toMove": "White",
    "bestMove": "Qh5",
    "solution": "Qh5, h6, Qxc5",
    "rating": 1805,
    "themes": [
      "Advantage"
    ],
    "level": 4
  },
  {
    "id": "0A32K",
    "fen": "3r3r/2p2kPp/p1n5/1p6/4NP2/8/PP4PP/R3K2R b KQ - 0 20",
    "toMove": "Black",
    "bestMove": "Rhe8",
    "solution": "Rhe8, O-O, Rxe4",
    "rating": 1816,
    "themes": [
      "Advantage",
      "Pin"
    ],
    "level": 4
  },
  {
    "id": "03NqJ",
    "fen": "6k1/4Kp2/7r/4PR2/8/8/8/8 b - - 1 82",
    "toMove": "Black",
    "bestMove": "Re6+",
    "solution": "Re6+, Kd8, Kg7, Rf1, Rxe5",
    "rating": 1820,
    "themes": [
      "Advantage",
      "rook Endgame"
    ],
    "level": 4
  },
  {
    "id": "0A2Kx",
    "fen": "2r1R1k1/p5pp/1p1q1p2/1n1p1Pn1/3P1NP1/1P5P/PB6/4Q1K1 b - - 2 29",
    "toMove": "Black",
    "bestMove": "Kf7",
    "solution": "Kf7, Rxc8, Nf3+, Kf1, Nxe1",
    "rating": 1861,
    "themes": [
      "Crushing",
      "Defensive Move",
      "Exposed King"
    ],
    "level": 4
  },
  {
    "id": "001uD",
    "fen": "6k1/1p4p1/1p3p1p/2r1p3/2n5/r3PN2/2RnNPPP/2R3K1 w - - 0 33",
    "toMove": "White",
    "bestMove": "Nxd2",
    "solution": "Nxd2, Nxd2, Rxd2, Rxc1+, Nxc1",
    "rating": 1866,
    "themes": [
      "Advantage"
    ],
    "level": 4
  },
  {
    "id": "0A1NO",
    "fen": "8/7p/4p2k/p3Q3/P1K5/2P3rP/1P4Pq/6R1 b - - 0 43",
    "toMove": "Black",
    "bestMove": "Rg4+",
    "solution": "Rg4+, hxg4, Qxe5",
    "rating": 1866,
    "themes": [
      "Crushing",
      "Discovered Attack"
    ],
    "level": 4
  },
  {
    "id": "03MIV",
    "fen": "r4rk1/R5p1/2bq1p1p/8/2p1PPQ1/2BP4/2P3PP/R5K1 b - - 0 23",
    "toMove": "Black",
    "bestMove": "Rxa7",
    "solution": "Rxa7, Rxa7, Qc5+, Kf1, Qxa7",
    "rating": 1868,
    "themes": [
      "Advantage",
      "Attraction",
      "Fork"
    ],
    "level": 4
  },
  {
    "id": "003wQ",
    "fen": "2r2rk1/6pp/3Q1q2/8/3N1B2/6P1/PP1K3P/5R2 b - - 0 24",
    "toMove": "Black",
    "bestMove": "Qxd6",
    "solution": "Qxd6, Bxd6, Rxf1",
    "rating": 1917,
    "themes": [
      "Advantage",
      "Discovered Attack",
      "Pin"
    ],
    "level": 4
  },
  {
    "id": "03Neq",
    "fen": "r7/1p2k2p/4p1pP/4p3/1PPpP3/p2KnR2/1P3RP1/8 b - - 1 32",
    "toMove": "Black",
    "bestMove": "a2",
    "solution": "a2, Rf7+, Kd6, c5+, Kc6, b5+, Kxc5",
    "rating": 1921,
    "themes": [
      "advanced Pawn",
      "Crushing",
      "Defensive Move"
    ],
    "level": 4
  },
  {
    "id": "0A2t1",
    "fen": "3r3r/ppp1kpp1/2p1b2p/4Pn2/8/2N2N2/PPPR1PPP/3R2K1 w - - 2 15",
    "toMove": "White",
    "bestMove": "g4",
    "solution": "g4, Rxd2, Rxd2, Nd6, exd6+",
    "rating": 1928,
    "themes": [
      "Crushing",
      "Trapped Piece"
    ],
    "level": 4
  },
  {
    "id": "03NGi",
    "fen": "r1bq1rk1/ppp2ppB/2nbp3/8/3P4/2P2N2/P1PB1PPP/R2Q1RK1 b - - 0 10",
    "toMove": "Black",
    "bestMove": "Kxh7",
    "solution": "Kxh7, Ng5+, Kg6",
    "rating": 1935,
    "themes": [
      "Advantage",
      "Hanging Piece"
    ],
    "level": 4
  },
  {
    "id": "000mr",
    "fen": "5r1k/5rp1/p7/1b2B2p/1P1P1Pq1/2R3Q1/P3p1P1/2R3K1 b - - 1 41",
    "toMove": "Black",
    "bestMove": "Rxf4",
    "solution": "Rxf4, Bxf4, Rxf4",
    "rating": 1957,
    "themes": [
      "Crushing"
    ],
    "level": 4
  },
  {
    "id": "03Nzv",
    "fen": "8/7p/5p2/p1k3p1/2P2P2/P2K2P1/8/8 w - - 0 47",
    "toMove": "White",
    "bestMove": "fxg5",
    "solution": "fxg5, fxg5, g4, a4, Kc3",
    "rating": 1972,
    "themes": [
      "Crushing",
      "Defensive Move",
      "pawn Endgame"
    ],
    "level": 4
  },
  {
    "id": "000qP",
    "fen": "8/7R/8/5p2/4bk1P/8/2r5/5KR1 b - - 8 51",
    "toMove": "Black",
    "bestMove": "Kf3",
    "solution": "Kf3, Ke1, Rc1+, Kd2, Rxg1",
    "rating": 1975,
    "themes": [
      "Crushing",
      "Exposed King",
      "Skewer"
    ],
    "level": 4
  },
  {
    "id": "03NrK",
    "fen": "5qrk/1p3p1p/p2np2Q/3p1p2/3P4/1PP2NRP/P3KP2/8 w - - 3 31",
    "toMove": "White",
    "bestMove": "Qf6+",
    "solution": "Qf6+, Rg7, Rxg7, Qxg7, Qd8+",
    "rating": 1976,
    "themes": [
      "Advantage",
      "Kingside Attack"
    ],
    "level": 4
  },
  {
    "id": "0A2EW",
    "fen": "5rk1/1p2q2p/p1bR1NpP/4p1P1/8/5r2/PPP3Q1/2KR4 b - - 2 29",
    "toMove": "Black",
    "bestMove": "R3xf6",
    "solution": "R3xf6, gxf6, Qxd6",
    "rating": 1981,
    "themes": [
      "Crushing"
    ],
    "level": 4
  },
  {
    "id": "0A1Jy",
    "fen": "r1bqr1k1/ppp1nppp/2n5/b5N1/2pPP3/B4Q2/P4PPP/RN3RK1 w - - 0 12",
    "toMove": "White",
    "bestMove": "Qxf7+",
    "solution": "Qxf7+, Kh8, Qh5, h6, Nf7+",
    "rating": 1985,
    "themes": [
      "Advantage",
      "Kingside Attack"
    ],
    "level": 4
  },
  {
    "id": "03OFF",
    "fen": "2rr4/p4kp1/1p2pn1p/5n2/2N2P2/2P1b3/PPB3PP/R1B2R1K b - - 0 21",
    "toMove": "Black",
    "bestMove": "Rxc4",
    "solution": "Rxc4, Bxf5, Bxc1, Bxe6+, Kxe6",
    "rating": 1986,
    "themes": [
      "Advantage",
      "Hanging Piece"
    ],
    "level": 4
  },
  {
    "id": "002Ds",
    "fen": "8/2p5/pp1p4/P2Pk2p/1PP1p2P/2n1K2P/3N4/8 w - - 0 46",
    "toMove": "White",
    "bestMove": "b5",
    "solution": "b5, Nd1+, Ke2, axb5, a6",
    "rating": 1992,
    "themes": [
      "Crushing",
      "knight Endgame"
    ],
    "level": 4
  },
  {
    "id": "001kG",
    "fen": "rnbq3r/1p3kpp/p4n2/2b5/2pNP3/2N5/PPP3PP/R1BQ1RK1 w - - 2 12",
    "toMove": "White",
    "bestMove": "Qh5+",
    "solution": "Qh5+, Kg8, Qxc5",
    "rating": 2011,
    "themes": [
      "Advantage",
      "Pin"
    ],
    "level": 4
  },
  {
    "id": "0A2Ch",
    "fen": "5rk1/5pp1/p3p2P/4P2Q/1pPp1P2/1P5R/2q4P/4b2K w - - 0 31",
    "toMove": "White",
    "bestMove": "hxg7",
    "solution": "hxg7, Qe4+, Kg1, Qg6+, Qxg6",
    "rating": 2024,
    "themes": [
      "advanced Pawn",
      "Crushing"
    ],
    "level": 4
  },
  {
    "id": "003aS",
    "fen": "8/8/5k1p/6pP/1R4P1/1p2KP2/8/1r6 b - - 0 43",
    "toMove": "Black",
    "bestMove": "b2",
    "solution": "b2, Rb6+, Ke5, f4+, gxf4+",
    "rating": 2027,
    "themes": [
      "advanced Pawn",
      "Crushing",
      "Defensive Move"
    ],
    "level": 4
  },
  {
    "id": "00008",
    "fen": "r6k/pp2r2p/4Rp1Q/3p4/8/1N1P2b1/PqP3PP/7K w - - 0 25",
    "toMove": "White",
    "bestMove": "Rxe7",
    "solution": "Rxe7, Qb1+, Nc1, Qxc1+, Qxc1",
    "rating": 2037,
    "themes": [
      "Crushing",
      "Hanging Piece"
    ],
    "level": 4
  },
  {
    "id": "001aK",
    "fen": "6k1/5p2/4p3/P1B5/2P4P/4Pnp1/Rb2r3/5K2 w - - 0 34",
    "toMove": "White",
    "bestMove": "Kxe2",
    "solution": "Kxe2, g2, e4, Nd4+, Kf2",
    "rating": 2044,
    "themes": [
      "Crushing",
      "Hanging Piece",
      "Quiet Move"
    ],
    "level": 4
  },
  {
    "id": "003cs",
    "fen": "2r1kbnr/pp4pp/4p3/3pq1N1/8/1P2B3/P3Q1PP/nN3RK1 w k - 0 17",
    "toMove": "White",
    "bestMove": "Rxf8+",
    "solution": "Rxf8+, Kxf8, Bc5+, Rxc5, Qxe5, Rc1+, Kf2",
    "rating": 2051,
    "themes": [
      "Advantage",
      "Attraction",
      "Discovered Attack"
    ],
    "level": 4
  },
  {
    "id": "000h0",
    "fen": "5rk1/p5p1/3bRr1p/1Pp4q/3p4/1P1Q1N2/P4PPP/4R1K1 b - - 0 22",
    "toMove": "Black",
    "bestMove": "Rxf3",
    "solution": "Rxf3, gxf3, Qxh2+, Kf1, Qh3+, Ke2, Qxe6+",
    "rating": 2053,
    "themes": [
      "Advantage",
      "interference",
      "Kingside Attack"
    ],
    "level": 4
  },
  {
    "id": "03Oqv",
    "fen": "r3kn1R/p4pp1/2n1p3/1N1p2q1/1ppPPN2/5P2/PPPQ4/2K5 w q - 0 20",
    "toMove": "White",
    "bestMove": "Rxf8+",
    "solution": "Rxf8+, Kxf8, Nxe6+, fxe6, Qxg5",
    "rating": 2058,
    "themes": [
      "Attraction",
      "Crushing",
      "Discovered Attack"
    ],
    "level": 4
  },
  {
    "id": "002xh",
    "fen": "2nk4/8/2PBp3/1pK1P1p1/1P4Pn/8/8/8 w - - 3 43",
    "toMove": "White",
    "bestMove": "Kxb5",
    "solution": "Kxb5, Ng2, Ka6, Ne3, Kb7",
    "rating": 2065,
    "themes": [
      "Crushing"
    ],
    "level": 4
  },
  {
    "id": "001Oo",
    "fen": "6k1/4p1bp/6p1/1p1pP3/qPpPp3/2P1P3/Q2B1KPP/8 w - - 3 24",
    "toMove": "White",
    "bestMove": "Qxa4",
    "solution": "Qxa4, bxa4, b5, Kf7, b6",
    "rating": 2078,
    "themes": [
      "Crushing",
      "Quiet Move"
    ],
    "level": 4
  },
  {
    "id": "03M6W",
    "fen": "7k/ppp3rr/1b1p4/4pQ2/4P1q1/P2P2B1/1PP1RP1P/R5K1 b - - 1 24",
    "toMove": "Black",
    "bestMove": "Qxg3+",
    "solution": "Qxg3+, hxg3, Rxg3+, Kf1, Rh1#",
    "rating": 2105,
    "themes": [
      "Kingside Attack",
      "mate",
      "Mate in 3"
    ],
    "level": 4
  },
  {
    "id": "03NSe",
    "fen": "2r2rk1/pp3pp1/1nn1q2p/3pPR2/3P2Q1/PP2B1PN/6P1/R5K1 w - - 1 24",
    "toMove": "White",
    "bestMove": "Nf4",
    "solution": "Nf4, Qxf5, Qxf5",
    "rating": 2112,
    "themes": [
      "Advantage"
    ],
    "level": 4
  },
  {
    "id": "03M4g",
    "fen": "r1b2rk1/1p5N/1q2p1p1/n2pPB2/5P2/1PP1b3/1BQN2P1/2KR3R b - - 0 19",
    "toMove": "Black",
    "bestMove": "Nxb3+",
    "solution": "Nxb3+, Kb1, Ra1+, Bxa1, Nxd2+",
    "rating": 2117,
    "themes": [
      "Advantage",
      "discovered Check",
      "Double Check"
    ],
    "level": 4
  },
  {
    "id": "0A0jY",
    "fen": "rqb1k2r/3p2p1/p3pp2/1p3P1p/4P1P1/P1N5/BP2Q1P1/2R2R1K b kq - 0 20",
    "toMove": "Black",
    "bestMove": "hxg4+",
    "solution": "hxg4+, Kg1, Qh2+, Kf2, Qf4+, Ke1, Qxc1+",
    "rating": 2119,
    "themes": [
      "Crushing",
      "Discovered Attack",
      "discovered Check"
    ],
    "level": 4
  },
  {
    "id": "0A1vf",
    "fen": "r3k2r/pp2q1p1/8/2p2b1p/2p1pPnP/P2B2Q1/1P1B2P1/2K1RR2 w kq - 0 22",
    "toMove": "White",
    "bestMove": "Bxe4",
    "solution": "Bxe4, Bxe4, Rxe4, Qxe4, Re1, Qxe1+, Qxe1+",
    "rating": 2123,
    "themes": [
      "Advantage",
      "Clearance",
      "Pin"
    ],
    "level": 4
  },
  {
    "id": "03N4m",
    "fen": "2rqR1k1/1p4bp/p1b2pp1/8/3n1B2/P1P2N2/1PQ2PPP/R5K1 b - - 0 20",
    "toMove": "Black",
    "bestMove": "Bxe8",
    "solution": "Bxe8, Nxd4, Qxd4, Qb3+, Qc4",
    "rating": 2126,
    "themes": [
      "Advantage"
    ],
    "level": 4
  },
  {
    "id": "0A1DW",
    "fen": "2k5/pR6/2pP3p/2P5/2PPr3/4p3/P5KP/5r2 w - - 0 44",
    "toMove": "White",
    "bestMove": "Rc7+",
    "solution": "Rc7+, Kd8, Kxf1",
    "rating": 2127,
    "themes": [
      "Advantage",
      "rook Endgame"
    ],
    "level": 4
  },
  {
    "id": "03NHS",
    "fen": "2bqr1k1/5pbp/4p1p1/rp1n4/8/1B3N1P/PB1Q1PP1/R3R1K1 w - - 0 20",
    "toMove": "White",
    "bestMove": "Bxg7",
    "solution": "Bxg7, Kxg7, Bxd5",
    "rating": 2135,
    "themes": [
      "Crushing",
      "Intermezzo"
    ],
    "level": 4
  },
  {
    "id": "003md",
    "fen": "r1b1k2N/ppp3pp/2n5/2bp4/7q/1B4n1/PPPP1P1P/RNBQR1K1 b q - 1 10",
    "toMove": "Black",
    "bestMove": "Ne4",
    "solution": "Ne4, Rxe4+, dxe4, Qh5+, Qxh5, Bf7+, Qxf7",
    "rating": 2149,
    "themes": [
      "Crushing",
      "Defensive Move"
    ],
    "level": 4
  },
  {
    "id": "000jr",
    "fen": "6k1/1p4pp/p5n1/5Q2/3BpP2/1P2PP1K/P1q4P/7r w - - 2 34",
    "toMove": "White",
    "bestMove": "Qd5+",
    "solution": "Qd5+, Kf8, Bc5+, Qxc5, Qxc5+",
    "rating": 2152,
    "themes": [
      "Crushing"
    ],
    "level": 4
  },
  {
    "id": "001u3",
    "fen": "2r3k1/p4pp1/Qq2p2p/b1Np4/2nP1P2/4P1P1/5K1P/2B1N3 w - - 4 34",
    "toMove": "White",
    "bestMove": "Qxc8+",
    "solution": "Qxc8+, Kh7, Qb7",
    "rating": 2190,
    "themes": [
      "Advantage",
      "Hanging Piece"
    ],
    "level": 4
  },
  {
    "id": "0A2th",
    "fen": "1r4nr/2p1kppp/p1B5/1pb1p3/8/5P2/PP3P1P/R1B1R1K1 w - - 0 18",
    "toMove": "White",
    "bestMove": "Rxe5+",
    "solution": "Rxe5+, Kd6, Bf4, Kxc6, Rc1",
    "rating": 2205,
    "themes": [
      "Advantage",
      "Clearance",
      "Fork"
    ],
    "level": 5
  },
  {
    "id": "002LF",
    "fen": "7r/p4pk1/1pp3p1/8/6q1/4Q3/PP1R1P1r/5KN1 w - - 0 39",
    "toMove": "White",
    "bestMove": "Qe5+",
    "solution": "Qe5+, f6, Qc7+, Kh6, Qxh2+",
    "rating": 2208,
    "themes": [
      "Advantage",
      "interference"
    ],
    "level": 5
  },
  {
    "id": "03MTs",
    "fen": "8/3p4/2pK4/5P1p/p2k2nP/8/1P1B4/8 w - - 0 44",
    "toMove": "White",
    "bestMove": "f6",
    "solution": "f6, a3, Bc3+",
    "rating": 2213,
    "themes": [
      "Crushing"
    ],
    "level": 5
  },
  {
    "id": "03Mvf",
    "fen": "6k1/pb1n2pp/1p1pN2q/8/2P1P1Q1/1PN5/P5PP/7K b - - 4 28",
    "toMove": "Black",
    "bestMove": "Ne5",
    "solution": "Ne5, Qg5, Qxe6, Qd8+, Kf7",
    "rating": 2217,
    "themes": [
      "Advantage"
    ],
    "level": 5
  },
  {
    "id": "0A1Mh",
    "fen": "8/1p5p/p5p1/1PPk1p2/r3pP2/1R5P/5PK1/8 w - - 0 31",
    "toMove": "White",
    "bestMove": "c6",
    "solution": "c6, b6, Rc3, axb5, c7",
    "rating": 2222,
    "themes": [
      "advanced Pawn",
      "Advantage",
      "Quiet Move"
    ],
    "level": 5
  },
  {
    "id": "0A1p3",
    "fen": "6k1/4Rp2/2Qp2pp/3Pbq2/8/4B1P1/r4PKP/8 w - - 4 35",
    "toMove": "White",
    "bestMove": "Qe8+",
    "solution": "Qe8+, Kg7, Rxf7+, Qxf7, Bxh6+, Kxh6, Qxf7",
    "rating": 2222,
    "themes": [
      "Advantage",
      "Deflection",
      "Fork"
    ],
    "level": 5
  },
  {
    "id": "00347",
    "fen": "8/2p5/8/2pPk2p/8/3K3P/6P1/8 b - - 2 42",
    "toMove": "Black",
    "bestMove": "h4",
    "solution": "h4, Kc4, Kd6",
    "rating": 2264,
    "themes": [
      "Crushing",
      "pawn Endgame",
      "Quiet Move"
    ],
    "level": 5
  },
  {
    "id": "003Ec",
    "fen": "3r4/p4R2/1pb2Pp1/n1p1Qqkp/8/P7/1P4PP/6RK w - - 3 33",
    "toMove": "White",
    "bestMove": "Qe3+",
    "solution": "Qe3+, Qf4, h4+, Kf5, Qh3+",
    "rating": 2288,
    "themes": [
      "Crushing",
      "Pin"
    ],
    "level": 5
  },
  {
    "id": "03PD2",
    "fen": "8/1kp5/p3p1p1/2Rp1qP1/1Q1P1P1r/1P3K2/P5P1/8 b - - 6 46",
    "toMove": "Black",
    "bestMove": "Ka8",
    "solution": "Ka8, Qd2, Qg4+, Kf2, Rh2",
    "rating": 2315,
    "themes": [
      "Crushing",
      "Defensive Move"
    ],
    "level": 5
  },
  {
    "id": "0A20G",
    "fen": "Q7/3q1kpp/4bp2/8/1Pr5/P2r3P/4NPP1/2R2R1K b - - 5 36",
    "toMove": "Black",
    "bestMove": "Bd5",
    "solution": "Bd5, Qxd5+, Qxd5",
    "rating": 2325,
    "themes": [
      "Crushing"
    ],
    "level": 5
  },
  {
    "id": "0A13C",
    "fen": "4r1k1/pp3ppp/8/3B4/8/Q1P3P1/P3qn1P/5RK1 w - - 0 24",
    "toMove": "White",
    "bestMove": "Bxf7+",
    "solution": "Bxf7+, Kh8, Rxf2",
    "rating": 2333,
    "themes": [
      "Advantage",
      "Intermezzo"
    ],
    "level": 5
  },
  {
    "id": "03Nkz",
    "fen": "8/8/1p2B3/6k1/1PP2pb1/8/5K2/8 w - - 0 51",
    "toMove": "White",
    "bestMove": "Bxg4",
    "solution": "Bxg4, Kxg4, b5, Kf5, c5, Ke5, c6",
    "rating": 2343,
    "themes": [
      "bishop Endgame",
      "Crushing",
      "Quiet Move"
    ],
    "level": 5
  },
  {
    "id": "0A3Mt",
    "fen": "6k1/p4pp1/1nrqp3/1QN5/3Pp2p/2N5/P7/K5R1 w - - 0 32",
    "toMove": "White",
    "bestMove": "N5xe4",
    "solution": "N5xe4, Qxd4, Rd1, Qxd1+, Nxd1, Rc1+, Kb2",
    "rating": 2345,
    "themes": [
      "Crushing"
    ],
    "level": 5
  },
  {
    "id": "03N7A",
    "fen": "r6r/1Q4p1/p1qkPp1p/3pb3/6P1/N1p5/PP6/3R1RK1 w - - 2 25",
    "toMove": "White",
    "bestMove": "Rxd5+",
    "solution": "Rxd5+, Kxd5, Rd1+, Bd4+, Rxd4+, Kxd4, Qxc6",
    "rating": 2346,
    "themes": [
      "Advantage",
      "Attraction",
      "Deflection"
    ],
    "level": 5
  },
  {
    "id": "0A1UD",
    "fen": "6r1/p2pkp2/1pr4p/2pQP1p1/2P3P1/1R5P/4qP2/1R4K1 w - - 1 30",
    "toMove": "White",
    "bestMove": "R3b2",
    "solution": "R3b2, Qxb2, Rxb2",
    "rating": 2358,
    "themes": [
      "Advantage",
      "Trapped Piece"
    ],
    "level": 5
  },
  {
    "id": "03Nj1",
    "fen": "5bk1/5p2/2q1p1p1/1pP1Pb1p/1PpQN2P/4B1P1/3K1P2/8 w - - 20 59",
    "toMove": "White",
    "bestMove": "Nf6+",
    "solution": "Nf6+, Kg7, Qd8",
    "rating": 2368,
    "themes": [
      "Crushing"
    ],
    "level": 5
  },
  {
    "id": "0A0VT",
    "fen": "2kr3r/1b2R2p/6pb/qnp2p2/3p4/BP3N2/PKQ2PPP/4R3 w - - 2 24",
    "toMove": "White",
    "bestMove": "Qxc5+",
    "solution": "Qxc5+, Kb8, Bb4",
    "rating": 2382,
    "themes": [
      "Advantage",
      "Queenside Attack"
    ],
    "level": 5
  },
  {
    "id": "001Hi",
    "fen": "6k1/pp1r1pp1/2p1p2p/4P2P/3q1Q2/1P4R1/P1Pr1PP1/R5K1 w - - 5 24",
    "toMove": "White",
    "bestMove": "Qf6",
    "solution": "Qf6, Qxf2+, Qxf2, Rxf2, Kxf2",
    "rating": 2391,
    "themes": [
      "Advantage",
      "Pin"
    ],
    "level": 5
  },
  {
    "id": "03Nm2",
    "fen": "5r2/pp2p1k1/2p2r2/3q1P1P/3P4/2P3p1/PP4P1/R2Q1RK1 b - - 0 27",
    "toMove": "Black",
    "bestMove": "Qe4",
    "solution": "Qe4, Rf3, Qh4, Qd3, Qh2+, Kf1, Qh1+",
    "rating": 2399,
    "themes": [
      "Advantage",
      "Kingside Attack"
    ],
    "level": 5
  },
  {
    "id": "0A2sR",
    "fen": "r1b2rk1/pp3p2/6p1/2p1n1q1/3pP2p/PBP4P/1P2QPP1/2R2RKN b - - 1 18",
    "toMove": "Black",
    "bestMove": "d3",
    "solution": "d3, Qe3, Qxe3",
    "rating": 2415,
    "themes": [
      "Advantage"
    ],
    "level": 5
  },
  {
    "id": "0A3Fn",
    "fen": "r1q2r1k/pppbbpp1/3p3p/5P2/3QP3/P1N3nP/1PP1B1P1/R1B2RK1 w - - 3 16",
    "toMove": "White",
    "bestMove": "f6",
    "solution": "f6, Bxf6, Rxf6, Nxe2+, Nxe2",
    "rating": 2417,
    "themes": [
      "Crushing"
    ],
    "level": 5
  },
  {
    "id": "002mG",
    "fen": "5r1k/B1p3pp/2Qb1p2/3Pq3/P6P/8/2P2K2/3R1R2 b - - 2 36",
    "toMove": "Black",
    "bestMove": "Re8",
    "solution": "Re8, Qxe8+, Qxe8",
    "rating": 2422,
    "themes": [
      "Advantage",
      "Quiet Move"
    ],
    "level": 5
  },
  {
    "id": "0A21p",
    "fen": "3q3k/p2b2rp/3N1p2/3Q1P2/2B5/8/P1r3PP/R4RK1 b - - 0 24",
    "toMove": "Black",
    "bestMove": "Qb6+",
    "solution": "Qb6+, Kh1, Bc6, Nf7+, Rxf7",
    "rating": 2456,
    "themes": [
      "Crushing"
    ],
    "level": 5
  },
  {
    "id": "002LW",
    "fen": "3r1rk1/1b3pp1/3p4/p3nPPQ/4P3/3q1BN1/8/2R2RK1 w - - 2 29",
    "toMove": "White",
    "bestMove": "f6",
    "solution": "f6, Nxf3+, Rxf3",
    "rating": 2464,
    "themes": [
      "Advantage"
    ],
    "level": 5
  },
  {
    "id": "03MUc",
    "fen": "2b3q1/2pp1k2/1p4r1/1pb1p3/4PP1Q/2P4R/P5PP/5R1K w - - 1 27",
    "toMove": "White",
    "bestMove": "Qh5",
    "solution": "Qh5, Kf8, Qf5+, Ke7, Qxe5+",
    "rating": 2481,
    "themes": [
      "Crushing",
      "Exposed King"
    ],
    "level": 5
  },
  {
    "id": "03Mp8",
    "fen": "r4rk1/1pp2p1p/5RpP/p3P3/8/2Q5/qPP5/2KR4 w - - 0 26",
    "toMove": "White",
    "bestMove": "e6",
    "solution": "e6, Qa1+, Kd2, Rfd8+, Ke3, Qxd1, Rxg6+",
    "rating": 2502,
    "themes": [
      "Crushing",
      "Sacrifice"
    ],
    "level": 5
  },
  {
    "id": "002e8",
    "fen": "3rnrk1/1b3pp1/4pb2/p3q3/1p1N4/3B2R1/PPPQN2P/1K4R1 w - - 2 24",
    "toMove": "White",
    "bestMove": "Qh6",
    "solution": "Qh6, g6, Rh3",
    "rating": 2504,
    "themes": [
      "Crushing",
      "Defensive Move",
      "Pin"
    ],
    "level": 5
  },
  {
    "id": "0A0OY",
    "fen": "8/2r5/2P5/2KP4/8/6pp/R7/6k1 b - - 1 53",
    "toMove": "Black",
    "bestMove": "h2",
    "solution": "h2, Ra1+, Kf2",
    "rating": 2506,
    "themes": [],
    "level": 5
  },
  {
    "id": "03NfT",
    "fen": "8/8/8/6pp/6k1/4KR2/8/3n4 w - - 1 60",
    "toMove": "White",
    "bestMove": "Ke2",
    "solution": "Ke2, h4, Rd3, Nc3+, Rxc3",
    "rating": 2544,
    "themes": [
      "Clearance",
      "Crushing",
      "Defensive Move"
    ],
    "level": 5
  },
  {
    "id": "03PJj",
    "fen": "8/1p6/p7/4k2p/P2p1p2/1P1K1P1P/6P1/8 w - - 0 37",
    "toMove": "White",
    "bestMove": "a5",
    "solution": "a5, Kd5, h4, Kc5, Ke4, d3, Kxd3",
    "rating": 2589,
    "themes": [
      "Crushing",
      "pawn Endgame",
      "Quiet Move"
    ],
    "level": 5
  },
  {
    "id": "0018S",
    "fen": "2kr3r/p4p2/1p2p2p/1N1p2p1/3Q4/1P1P4/2q2PPP/5RK1 w - - 0 21",
    "toMove": "White",
    "bestMove": "Qa1",
    "solution": "Qa1, a5, Rc1",
    "rating": 2595,
    "themes": [
      "Advantage",
      "Pin"
    ],
    "level": 5
  },
  {
    "id": "0A2Lb",
    "fen": "7r/1kpK4/p4p2/R2Pp1p1/6R1/P4r1p/2P2P2/8 w - - 2 36",
    "toMove": "White",
    "bestMove": "Rb4+",
    "solution": "Rb4+, Ka7, c4, Rb8, Kxc7",
    "rating": 2627,
    "themes": [
      "Crushing",
      "Quiet Move",
      "rook Endgame"
    ],
    "level": 5
  },
  {
    "id": "002e5",
    "fen": "r2q2k1/pp1n2bp/3P2b1/6N1/6Q1/P3P3/6P1/4K2R w K - 2 22",
    "toMove": "White",
    "bestMove": "Qc4+",
    "solution": "Qc4+, Kh8, Rxh7+, Bxh7, Nf7+",
    "rating": 2632,
    "themes": [
      "Crushing",
      "Sacrifice"
    ],
    "level": 5
  },
  {
    "id": "0A38J",
    "fen": "r4rk1/5pp1/p1p4p/8/1Pp1R1Q1/5PP1/1P4KP/R1Bq4 b - - 2 28",
    "toMove": "Black",
    "bestMove": "Qc2+",
    "solution": "Qc2+, Kh3, f5, Qg6, fxe4",
    "rating": 2653,
    "themes": [
      "Advantage",
      "Fork"
    ],
    "level": 5
  },
  {
    "id": "03NIM",
    "fen": "r1b1r2k/pp2q3/2pp1NQP/6P1/1bP5/7N/P2P2P1/R2K1R2 b - - 0 21",
    "toMove": "Black",
    "bestMove": "Qe2+",
    "solution": "Qe2+, Kc2, Qxc4+, Kb2, Bc3+, dxc3, Re2+",
    "rating": 2655,
    "themes": [
      "Advantage",
      "Fork",
      "Sacrifice"
    ],
    "level": 5
  },
  {
    "id": "0A3HD",
    "fen": "5k2/4q3/1p2pn2/p2p4/2nP1P2/P3P1Q1/1P2K3/7R w - - 2 36",
    "toMove": "White",
    "bestMove": "Rh8+",
    "solution": "Rh8+, Kf7, Qg5, Nd6, Rh6",
    "rating": 2665,
    "themes": [
      "Advantage"
    ],
    "level": 5
  },
  {
    "id": "0A1eq",
    "fen": "8/8/7k/p4Kp1/P2N1bP1/8/8/8 w - - 17 51",
    "toMove": "White",
    "bestMove": "Nb3",
    "solution": "Nb3, Bc7, Ke6, Kg6, Kd7, Bb6, Kc6, Bf2, Nxa5",
    "rating": 2738,
    "themes": [
      "Crushing"
    ],
    "level": 5
  },
  {
    "id": "03PVp",
    "fen": "6rk/1p1br3/p1p2p1p/3n1B2/3P4/P7/1PQ3PP/5RK1 b - - 2 25",
    "toMove": "Black",
    "bestMove": "Ne3",
    "solution": "Ne3, Qc5, Rxg2+, Kh1, Rgg7, Bxd7, Nxf1",
    "rating": 2770,
    "themes": [
      "Advantage",
      "Fork",
      "Quiet Move"
    ],
    "level": 5
  },
  {
    "id": "000VW",
    "fen": "r4r2/1p3pkp/p7/3R1p1Q/3P4/8/P1q2P2/3R2K1 w - - 0 26",
    "toMove": "White",
    "bestMove": "Rc5",
    "solution": "Rc5, Qe4, Qg5+, Kh8, Qf6+",
    "rating": 2861,
    "themes": [
      "Crushing"
    ],
    "level": 5
  },
  {
    "id": "03MPe",
    "fen": "1R6/1P2qpkp/3p2p1/2pP4/1pPb1Q2/1P1B2PP/5P1K/r7 b - - 0 30",
    "toMove": "Black",
    "bestMove": "Qe1",
    "solution": "Qe1, Rg8+, Kxg8, b8=Q+, Kg7, Bf1, Ra2, Qxf7+, Kxf7",
    "rating": 2914,
    "themes": [
      "Crushing",
      "Pin"
    ],
    "level": 5
  }
];

export default {
  id: "chess-tactics",
  name: "Chess Tactics",
  description: "200 tactical puzzles from real games (Lichess)",
  cardType: "chess",
  cards,
};

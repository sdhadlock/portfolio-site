# Q3 - Build a Parameterized Synchronous FIFO (from scratch)

Now that you've debugged one (Q1), build a correct one yourself without
looking back at Q1's answer.

## Interface

```
module sync_fifo #(
    parameter DEPTH = 16,   // power of 2
    parameter WIDTH = 8
) (
    input  logic             clk,
    input  logic             rst,     // synchronous, active-high
    input  logic             wr_en,
    input  logic             rd_en,
    input  logic [WIDTH-1:0] din,
    output logic [WIDTH-1:0] dout,
    output logic             full,
    output logic             empty,
    output logic [$clog2(DEPTH):0] count   // number of valid entries, 0..DEPTH
);
```

## Requirements
- Standard circular-buffer FIFO, one write port, one read port.
- `wr_en && !full` writes `din` on that clock edge.
- `rd_en && !empty` presents the oldest entry on `dout` (registered).
- `full`/`empty`/`count` must be correct including the edge cases:
  simultaneous read+write, back-to-back writes to exactly fill it,
  back-to-back reads to exactly drain it, and pointer wraparound.
- No inferred latches, no combinational loops.

## Task
Write the design from scratch in `design.sv` (currently empty except the
port list). Run `tb.sv` - target ALL TESTS PASSED. Try to do it without
peeking at your Q1 fix.

## Interview framing
This (or something extremely close to it) shows up constantly in HW
interviews because it touches: pointer arithmetic, off-by-one reasoning,
blocking vs nonblocking discipline, and reset behavior, all in ~30 lines.
Being able to write it cold in under 20 minutes is a good bar to hit.

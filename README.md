# Ciphering CLI Tool

## Ciphering CLI Tool &mdash; encode and decode a text by 3 substitution ciphers:
* [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)
* [Atbash cipher](https://en.wikipedia.org/wiki/Atbash)
* [ROT-8 as variation of ROT-13](https://en.wikipedia.org/wiki/ROT13)

## How to start work with Ciphering CLI Tool:
1. You have to make a clone of this repository.
2. Go to the `node ciphering_cli` branch.
3. Enter in the console `npm i`.
4. Now you can decoded and encoded text in console.

##How decoded and encoded text:
You need enter command in console.
> All commands start from `node my_ciphering_cli` after that you will need to enter the parameters you want. You can get acquainted with the parameters below.
> 
> ###Important:
> * You should definitely register the `Config` parameter. And it must correspond to the pattern that is prescribed in the `Options` section.</br></br>
> * If you want to use your own input file, you need to add it to the root of the project.</br></br>
> * If you do not specify the input and output configuration in the parameters, then you will be able to enter text into the console. And you can see the result after pressing enter.</br> To finish typing, press `Ctrl + C`.</br></br>
> * If you do not specify only the input configuration in the parameters, you will be able to enter text into the console. After you finish typing, press `Ctrl + C `. The result of the program will be in the output file.</br></br>
> * If you do not specify the output configuration in the options, the result will be output to the console.</br>

## Options:
CLI tool accept 3 options (short alias and full name):

1.  **-c, --config**: config for ciphers
    Config is a string with pattern `{XY(-)}n`, where:
* `X` is a cipher mark:
    * `C` is for Caesar cipher (with shift 1)
    * `A` is for Atbash cipher
    * `R` is for ROT-8 cipher
* `Y` is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
    * `1` is for encoding
    * `0` is for decoding
2.  **-i, --input**: a path to input file
3.  **-o, --output**: a path to output file

For example, config `"C1-C1-R0-A"` means "encode by Caesar cipher => encode by Caesar cipher => decode by ROT-8 => use Atbash"

**Usage example:**

```bash
$ node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!`

```bash
$ node my_ciphering_cli -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!`

```bash
$ node my_ciphering_cli -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!`

```bash
$ node my_ciphering_cli -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `This is secret. Message about "_" symbol!`

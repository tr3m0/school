<?php
function fromUSD($amount, $currency) {
    $rates = [
        "USD" => 1.0000,
        "EUR" => 0.9500,
        "JPY" => 145.00,
        "GBP" => 0.7800,
        "CHF" => 0.8800,
        "AUD" => 1.5500,
        "CAD" => 1.3500
    ];
    return $amount * $rates[$currency];
}
function toUSD($amount, $currency) {
    $rates = [
        "USD" => 1.0000,
        "EUR" => 1.0526,
        "JPY" => 0.0069,
        "GBP" => 1.2821,
        "CHF" => 1.1364,
        "AUD" => 0.6452,
        "CAD" => 0.7407
    ];
    return $amount * $rates[$currency];
}

$currencies = ["USD", "EUR", "JPY", "GBP", "CHF", "AUD", "CAD"];
function currencySelector($name, $options) {
    $html = "<label for='$name-currency'>$name</label>";
    $html .= "<select name='$name' id='$name-currency'>";
    foreach ($options as $option) {
        $html .= "<option value='$option'>$option</option>";
    }
    $html .= "</select>";
    return $html;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Currency converter</title>
</head>
<body>
    <form action="index.php" method="POST">
        <div>
            <?= currencySelector("from", $currencies); ?>
            <?= currencySelector("to", $currencies); ?>
        </div>
        <label for="amount">Amount</label>
        <input type="number" min="0" name="amount" id="amount">
        <button type="submit">Convert</button>
    </form>
    <div>
        <?php
            $from = @$_POST["from"];
            $to = @$_POST["to"];
            $amount = @$_POST["amount"];

            if (isset($from) && isset($to) && isset($amount)) {
                $usd = toUSD($amount, $from);
                $result = fromUSD($usd, $to);

                echo "<h1>Result</h1>";
                echo "$amount $from = $result $to";
            }
        ?>
    </div>
</body>
</html>
<?php
function print_r2($val) {
    echo '<pre>';
    print_r($val);
    echo  '</pre>';
}

spl_autoload_register(function ($class) {
    include './libs/class_'.$class.'.php';
});

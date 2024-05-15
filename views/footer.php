<?php
    $url = isset($_SERVER["HTTPS"]) ? 'https://' : 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
?>
<footer>
    <div>
        <div>
            <a href="https://validator.w3.org/nu/?doc=<?= urlencode($url); ?>" target="_blank">W3C</a>
        </div>
        <div>
            Div B
        </div>
    </div>
</footer>
<script src="/scripts/script.js"></script>
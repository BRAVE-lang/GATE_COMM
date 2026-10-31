[Windows.Media.Ocr.OcrEngine, Windows.Foundation.UniversalApiContract, ContentType = WindowsRuntime] | Out-Null
$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
if ($engine) {
    Write-Output "Windows OCR is AVAILABLE on this machine!"
} else {
    Write-Output "Windows OCR is NOT available."
}


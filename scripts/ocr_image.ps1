param (
    [string]$ImagePath
)

[Windows.Media.Ocr.OcrEngine, Windows.Foundation.UniversalApiContract, ContentType = WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapDecoder, Windows.Foundation.UniversalApiContract, ContentType = WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapPixelFormat, Windows.Foundation.UniversalApiContract, ContentType = WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapAlphaMode, Windows.Foundation.UniversalApiContract, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.StorageFile, Windows.Foundation.UniversalApiContract, ContentType = WindowsRuntime] | Out-Null

$fullPath = [System.IO.Path]::GetFullPath($ImagePath)

function Await-Async ($asyncOp) {
    while ($asyncOp.Status -eq [Windows.Foundation.AsyncStatus]::Started) {
        Start-Sleep -Milliseconds 10
    }
    if ($asyncOp.Status -eq [Windows.Foundation.AsyncStatus]::Completed) {
        return $asyncOp.GetResults()
    } else {
        throw "Async operation failed with status $($asyncOp.Status): $($asyncOp.ErrorCode)"
    }
}

try {
    $file = Await-Async ([Windows.Storage.StorageFile]::GetFileFromPathAsync($fullPath))
    $stream = Await-Async ($file.OpenAsync([Windows.Storage.FileAccessMode]::Read))
    $decoder = Await-Async ([Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream))
    $bitmap = Await-Async ($decoder.GetSoftwareBitmapAsync([Windows.Graphics.Imaging.BitmapPixelFormat]::Bgra8, [Windows.Graphics.Imaging.BitmapAlphaMode]::Premultiplied))
    $engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
    $result = Await-Async ($engine.RecognizeAsync($bitmap))
    
    Write-Output "--- OCR RESULT ---"
    Write-Output $result.Text
} catch {
    Write-Error $_.Exception.ToString()
}

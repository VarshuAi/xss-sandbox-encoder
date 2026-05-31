
            const inp = document.getElementById('xss-inp');
            const out = document.getElementById('xss-out');
            
            window.escapeHTML = function() {
                out.value = inp.value
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#x27;");
            }
            window.escapeJS = function() {
                out.value = inp.value.replace(/[\\"']/g, '\\$&');
            }
            inp.value = "<script>alert('XSS Demo')</script>";
            escapeHTML();
        
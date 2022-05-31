(function() {var implementors = {};
implementors["duct"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"duct/struct.ReaderHandle.html\" title=\"struct duct::ReaderHandle\">ReaderHandle</a>","synthetic":false,"types":["duct::ReaderHandle"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"duct/struct.ReaderHandle.html\" title=\"struct duct::ReaderHandle\">ReaderHandle</a>","synthetic":false,"types":["duct::ReaderHandle"]}];
implementors["os_pipe"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"os_pipe/struct.PipeReader.html\" title=\"struct os_pipe::PipeReader\">PipeReader</a>","synthetic":false,"types":["os_pipe::PipeReader"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"os_pipe/struct.PipeReader.html\" title=\"struct os_pipe::PipeReader\">PipeReader</a>","synthetic":false,"types":["os_pipe::PipeReader"]}];
implementors["tar"] = [{"text":"impl&lt;'a, R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"tar/struct.Entry.html\" title=\"struct tar::Entry\">Entry</a>&lt;'a, R&gt;","synthetic":false,"types":["tar::entry::Entry"]}];
implementors["tempfile"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"tempfile/struct.NamedTempFile.html\" title=\"struct tempfile::NamedTempFile\">NamedTempFile</a>","synthetic":false,"types":["tempfile::file::NamedTempFile"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"tempfile/struct.NamedTempFile.html\" title=\"struct tempfile::NamedTempFile\">NamedTempFile</a>","synthetic":false,"types":["tempfile::file::NamedTempFile"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"tempfile/struct.SpooledTempFile.html\" title=\"struct tempfile::SpooledTempFile\">SpooledTempFile</a>","synthetic":false,"types":["tempfile::spooled::SpooledTempFile"]}];
implementors["zstd"] = [{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"zstd/stream/read/struct.Decoder.html\" title=\"struct zstd::stream::read::Decoder\">Decoder</a>&lt;'_, R&gt;","synthetic":false,"types":["zstd::stream::read::Decoder"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"zstd/stream/read/struct.Encoder.html\" title=\"struct zstd::stream::read::Encoder\">Encoder</a>&lt;'_, R&gt;","synthetic":false,"types":["zstd::stream::read::Encoder"]},{"text":"impl&lt;R, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"zstd/stream/zio/struct.Reader.html\" title=\"struct zstd::stream::zio::Reader\">Reader</a>&lt;R, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"zstd/stream/raw/trait.Operation.html\" title=\"trait zstd::stream::raw::Operation\">Operation</a>,&nbsp;</span>","synthetic":false,"types":["zstd::stream::zio::reader::Reader"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
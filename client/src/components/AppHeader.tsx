import { ArrowLeft, Search, HelpCircle, Menu } from "lucide-react";

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <div className="flex items-center">
            <img 
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO2Z3W8UVRTAb0nEGBM/gkajb8b45Jv/gCY++GJiJJrQaGxV1CpqFTWKtoIYgkIQCAItlZbyKahtEfpFS2m/tvvN7szOzszudHdnd2e73d2Z2dmZawaGdj66u9MNsjmTk5nMnnvP75577rm9s4oCESJEiM2MAwLTX+m2CUcTmC5dZfpbZfD/h65S4wrT5zFgGZmCVfwvEKF1iUZfDwdE5jA6Bg5VDbNaGbKVJbBaJXBXZgZNzBjwTvlsJIRPJAbniMD6NJE9bHcNiVrFcCzFQtP9VGQfyY7XReYLM8RQtRgWqjHwuBpDLytfEYE9IrICXYnYzw2V6XGFTtP9dJ4mcwCMlQwwX9NRy9U4gklNEJnvZWNtMwTvK24YfK8NDtwVOZiaR0+1aPRSc9WopaX1TzOC8YnCJiWM13QC9W5QZIeWJxomPCGrTQMG5g7A0IIKk/frZqWllaYEAc4M5wgvnx9NnRQCU+lxcFfVsCtQrK2Xpe6j41G/CKyf8CIJ4hI+BbZZNbDPZmB29jQMF45BrK8b5qvH+y5P3GpnHONthHFuTIlGXw8HFKbTIHgR0W825m4DBzqZO+b/QTTG32xnODbLiMTe8N15xeotUHi2BGIc6YW2qgqZxW4wyylF8HfmyOKxfWK7EuCTkjEI9gMCtkYZvWdEQb0p/1M9BnOVTpgYOgzfpcZCXUY6OlO0qZAXoK+vf/e2B+BUd82DgOIhBPXJ+EhtMDrWB1cnx+DLXzKQOjcEw4O/gXEjCckBDf5OXoUHt6/D3OQlMC9fgo+GZjZdgJ88hIfXLsPjgX5YvHYFjIO/QO3cEOw1alALxmBZBWC2L7+VAuxMj4PY2w1iLwdibxfEe7phjpPrdyE1J3/L2OaV+LcAP/nYD3AMNfmrE2DwXMufALHsADMrZwLMbOpqyjLhJIBZ7XYVoDc6bw/Q+9tAXgFmY/ZqAVQBCCMzHEO9BviBXLuCJHTF/wKclx3SLsAPhJkKDAfYIgH9JiFFMcFRzfKhWQgaGBNmFZJLyHJa5i1UmM7YBlWnvBNwOQPL7sIGZ5DabL9DQN11oFkCQl5oIwHFQxILJyoEHl2/Zvd3y4d1H2UE5pSPO1HRGP8nTn9FNj3JA66Zt+GnM10gJAZBSA7BOmr+0hiYfceA79WMRIx7OG/vN9HK3tLsE78fCQM8i9RhflIH4+wJONCdg0nV07bLFOD63RrM13Vb0/W4LRw3sSdxbk0G9iO+OiXwfFZh05VUMgjFrgRY/l7a+YtbE+Y6MbmP/B27JsQeH91HxuH8lSEo9XBgvncCKl89BdanT+HkUN6Tew+S9yGdnYOxWRMs32TDmfnCi7RqL/p9HX1dKIGx9MQK3qLXyvQXQubxTMx1yXmhZXCaXtMU3yMyv2N5u7FsHmRXqSHCCQSEFZz8RnbdhrcLitVr4zTf2fimb1R5M86W9hOJHqWlLqhUj9PRrM4eXzMvK0KECBFi+/APSUo1hbGP9FYAAAAASUVORK5CYII=" 
              alt="Google Play icon" 
              className="w-6 h-6 mr-2"
            />
            <ArrowLeft className="text-[hsl(var(--text-secondary))] mr-2" />
            <span className="text-sm font-medium">게임</span>
          </div>
        </div>
        <div className="flex items-center">
          <Search className="w-5 h-5 text-[hsl(var(--text-secondary))] mr-4" />
          <HelpCircle className="w-5 h-5 text-[hsl(var(--text-secondary))] mr-4" />
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <Menu className="w-5 h-5 text-[hsl(var(--text-secondary))]" />
          </div>
        </div>
      </div>
    </header>
  );
}

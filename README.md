# MaxHarmonograph
This project is split into two main components: the polyphonic synthesizer, and harmonograph. 

**Harmonograph**: This implementation takes two routes of visualizing triad dimensions. A harmonograph given whole integer ratios is easy enough to implement, as it just requires some basic trigenometry and some graphics library. However in order to make meaningful visualizations from MIDI data, more data processing must happen. In short, I normalize the data to a 1 : x : y ratio, which makes it mathematically equivalent to any other ratio, however finding the greatest common integer   denominator of these ratios is computationally taxing, and may not even exist. 

The harmonograph is split in two parts: equal temperament, and just intonation, each containing a noise parameter as well. The purpose of this is to visually see how equal temperament messes with the pure mathematical ratio representation of intervals. 

Also, it spins, colorful and you can rotate it with your mouse too if you want — just a fun touch.

**Polyphonic Synthesizer**: Limited to 3-note polyohony, as the harmonograph can only operate in 3 dimensions, the polyphonic synthesizer is based on a saw wave. I was not able to implement an effective ADSR filter in time, as the triggering was rather cumbersome. A main feature of the synthesizer is the lowpass filter. This is important because the same dial that controls the frequency cutoff also controls the noise amplitude in the harmonograph. This feature is off by default due to lag during automation. Change the noise variable in harmojit.js to renable this. 

Due to device limitations, it is important to open the max patcher during use, or else the audio doesn’t come through for some reason. 
